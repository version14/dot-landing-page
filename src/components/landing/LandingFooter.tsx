const footerLinks = [
  {
    label: 'Docs',
    href: 'https://github.com/version14/dot/blob/main/docs/user/getting-started.md',
  },
  {
    label: 'Contributing',
    href: 'https://github.com/version14/dot/blob/main/CONTRIBUTING.md',
  },
  {
    label: 'Changelog',
    href: 'https://github.com/version14/dot/blob/main/CHANGELOG.md',
  },
  {
    label: 'License',
    href: 'https://github.com/version14/dot/blob/main/LICENSE',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/version14/dot',
  },
]

export function LandingFooter() {
  return (
    <footer className="lp-footer" role="contentinfo">
      <div className="lp-f-logo">
        <span>·</span>dot
      </div>
      <nav className="lp-f-links" aria-label="Footer navigation">
        {footerLinks.map(({ label, href }) => (
          <a key={label} href={href} className="lp-flk" target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </nav>
      <div className="lp-f-right">version14/dot · MIT</div>
    </footer>
  )
}
