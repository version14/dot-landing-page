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
import landingCss from "../styles/landing.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "stylesheet", href: landingCss }],
  }),
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

  return (
    <LandingToastProvider>
      <div className="lp">
        <a href="#main" className="lp-skip">
          Skip to main content
        </a>
        <LandingNav />
        <div className="lp-rail" id="main">
          <LandingHero />
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
