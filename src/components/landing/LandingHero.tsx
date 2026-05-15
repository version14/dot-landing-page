import { LinkButton } from "../ui/base/button";
import { CopyButton } from "../ui/CopyButton";
import { Terminal } from "./Terminal";

const INSTALL_CMD =
  "curl -fsSL https://raw.githubusercontent.com/version14/dot/main/install.sh | sh";

interface LandingHeroProps {
  version: string;
}

export function LandingHero({ version }: Readonly<LandingHeroProps>) {
  return (
    <section className="lp-hero" aria-label="Hero">
      <div className="lp-hero-l">
        <div className="lp-badge">
          <span className="lp-badge-dot" aria-hidden="true" />
          {version} · Open Source · MIT
        </div>

        <h1>
          From questions
          <br />
          to production.
        </h1>

        <p className="lp-hsub">
          Answer a few prompts in a beautiful TUI — dot generates a production-ready project.
          TypeScript, Go, monorepos, microservices.
        </p>

        <div className="lp-acts">
          <LinkButton href="#install">Install now</LinkButton>
          <LinkButton
            variant="outline"
            href="https://github.com/version14/dot/blob/main/docs/user/getting-started.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs →
          </LinkButton>
        </div>

        <div className="lp-ibox" aria-label="curl install command">
          <span className="lp-ipre" aria-hidden="true">
            curl
          </span>
          <span className="lp-ival" aria-label="curl install command">
            {INSTALL_CMD}
          </span>
          <CopyButton text={INSTALL_CMD} className="lp-icp" aria-label="Copy install command" />
        </div>
      </div>

      <div className="lp-hero-r" aria-hidden="true">
        <Terminal />
      </div>
    </section>
  );
}
