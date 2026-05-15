import { CopyButton } from '../ui/CopyButton'

interface InstallMethod {
  tag: string
  value: string
  ariaLabel: string
}

const INSTALL_METHODS: InstallMethod[] = [
  {
    tag: 'Homebrew',
    value: 'brew install version14/tap/dot',
    ariaLabel: 'Copy Homebrew install command',
  },
  {
    tag: 'curl',
    value: 'curl -fsSL https://raw.githubusercontent.com/version14/dot/main/install.sh | sh',
    ariaLabel: 'Copy curl install command',
  },
  {
    tag: 'go install',
    value: 'go install github.com/version14/dot/cmd/dot@latest',
    ariaLabel: 'Copy go install command',
  },
]

export function LandingInstall() {
  return (
    <div className="lp-cta" id="install">
      <div className="lp-cta-in">
        <h2 className="lp-cta-h lp-fu">Start scaffolding.</h2>
        <p className="lp-cta-s lp-fu d1">
          Choose your install method. Be up and running in seconds.
        </p>

        <div className="lp-io" role="list" aria-label="Install options">
          {INSTALL_METHODS.map(({ tag, value, ariaLabel }) => (
            <div key={tag} className="lp-ir" role="listitem">
              <span className="lp-itag">{tag}</span>
              <span className="lp-ival-cmd" aria-label={value}>
                {value}
              </span>
              <CopyButton text={value} className="lp-cbtn" aria-label={ariaLabel} />
            </div>
          ))}
        </div>

        <p className="lp-cta-note lp-fu">
          MIT Licensed ·{' '}
          <a href="https://github.com/version14/dot" target="_blank" rel="noopener noreferrer">
            github.com/version14/dot →
          </a>
        </p>
      </div>
    </div>
  )
}
