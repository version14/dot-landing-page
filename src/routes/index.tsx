import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LandingFeatures } from "../components/landing/LandingFeatures";
import { LandingFlows } from "../components/landing/LandingFlows";
import { LandingFooter } from "../components/landing/LandingFooter";
import { LandingHero } from "../components/landing/LandingHero";
import { LandingHowItWorks } from "../components/landing/LandingHowItWorks";
import { LandingInstall } from "../components/landing/LandingInstall";
import { LandingMarquee } from "../components/landing/LandingMarquee";
import { LandingNav } from "../components/landing/LandingNav";
import { LandingToastProvider } from "../components/ui/Toast";
import "../styles/landing.css";

const FALLBACK_VERSION = "vx.x.x";

async function fetchLatestVersion(): Promise<string> {
	try {
		const res = await fetch(
			"https://api.github.com/repos/version14/dot/releases/latest",
			{
				headers: { Accept: "application/vnd.github+json" },
				signal: AbortSignal.timeout(3000),
			},
		);
		if (!res.ok) return FALLBACK_VERSION;
		const data = (await res.json()) as { tag_name?: string };
		return data.tag_name ?? FALLBACK_VERSION;
	} catch {
		return FALLBACK_VERSION;
	}
}

export const Route = createFileRoute("/")({
	loader: async () => ({ version: await fetchLatestVersion() }),
	component: LandingPage,
});

function useFadeUpObserver() {
	useEffect(() => {
		const els = document.querySelectorAll<HTMLElement>(".lp-fu");
		const obs = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						e.target.classList.add("vis");
						obs.unobserve(e.target);
					}
				}
			},
			{ threshold: 0.1 },
		);
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
}

function LandingPage() {
	useFadeUpObserver();
	const { version } = Route.useLoaderData();

	return (
		<LandingToastProvider>
			<div className="lp">
				<a href="#main" className="lp-skip">
					Skip to main content
				</a>
				<LandingNav />
				<div className="lp-rail" id="main">
					<LandingHero version={version} />
					<LandingMarquee />
					<LandingFeatures />
					<LandingHowItWorks />
					<LandingFlows />
					<LandingInstall />
					<LandingFooter />
				</div>
			</div>
		</LandingToastProvider>
	);
}
