import { useEffect, useState } from "react";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav id="lp-nav" className={`lp-nav${scrolled ? " sc" : ""}`} role="banner">
      <div className="lp-ni">
        <a href="#" className="lp-logo" aria-label="dot home">
          <span>·</span>dot
        </a>
        <div className="lp-mid" role="navigation" aria-label="Main navigation">
          <a
            href="https://github.com/version14/dot/blob/main/docs/user/getting-started.md"
            className="lp-nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            href="https://github.com/version14/dot/blob/main/CHANGELOG.md"
            className="lp-nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Changelog
          </a>
          <a
            href="https://github.com/version14/dot"
            className="lp-nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#install" className="lp-cta-btn">
            Install →
          </a>
        </div>
      </div>
    </nav>
  );
}
