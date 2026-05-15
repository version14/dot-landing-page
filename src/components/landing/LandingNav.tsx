import { Drawer } from "@base-ui/react/drawer";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  {
    label: "Docs",
    href: "https://github.com/version14/dot/blob/main/docs/user/getting-started.md",
  },
  {
    label: "Changelog",
    href: "https://github.com/version14/dot/blob/main/CHANGELOG.md",
  },
  {
    label: "GitHub",
    href: "https://github.com/version14/dot",
  },
];

const BurgerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header id="lp-nav" className={`lp-nav${scrolled ? " sc" : ""}`}>
      <div className="lp-ni">
        <a href="/" className="lp-logo" aria-label="dot home">
          <span>·</span>dot
        </a>

        {/* Desktop nav links */}
        <nav className="lp-mid" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="lp-nl" target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
          <a href="#install" className="lp-cta-btn">
            Install →
          </a>
        </nav>

        {/* Mobile drawer */}
        <Drawer.Root>
          <Drawer.Trigger className="lp-burger" aria-label="Open navigation menu">
            <BurgerIcon />
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Backdrop className="lp-drawer-backdrop" />
            <Drawer.Popup className="lp-drawer-popup" aria-label="Navigation menu">
              <div className="lp-drawer-header">
                <a href="/" className="lp-drawer-logo" aria-label="dot home">
                  <span>·</span>dot
                </a>
                <Drawer.Close className="lp-drawer-close" aria-label="Close navigation menu">
                  <CloseIcon />
                </Drawer.Close>
              </div>

              <nav className="lp-drawer-links" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="lp-drawer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a href="#install" className="lp-drawer-cta">
                Install →
              </a>
            </Drawer.Popup>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </header>
  );
}
