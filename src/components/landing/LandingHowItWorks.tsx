const STEPS = [
  {
    num: '01',
    title: 'Install dot',
    desc: 'One command via Homebrew, curl, or go install. Works on macOS, Linux, and Windows.',
    code: (
      <>
        <span className="lp-sc-d">$</span> brew install version14/tap/dot
      </>
    ),
    delay: '',
  },
  {
    num: '02',
    title: 'Pick a flow',
    desc: 'Run dot scaffold, answer a few questions. Choose your stack, language, and patterns.',
    code: (
      <>
        <span className="lp-sc-d">$</span> dot scaffold{' '}
        <span className="lp-sc-w">monorepo</span>
      </>
    ),
    delay: 'd1',
  },
  {
    num: '03',
    title: 'Ship',
    desc: 'Your project is ready on disk. Use dot update or dot doctor to keep it in sync.',
    code: (
      <>
        <span className="lp-sc-g">✓</span> Done in <span className="lp-sc-w">1.4s</span>
      </>
    ),
    delay: 'd2',
  },
]

export function LandingHowItWorks() {
  return (
    <>
      <div className="lp-sec-hdr">
        <div className="lp-sec-hdr-l lp-fu">
          <div className="lp-sec-lbl">How it works</div>
          <h2 className="lp-sec-h">
            Three steps from
            <br />
            zero to project.
          </h2>
        </div>
        <div className="lp-sec-hdr-r lp-fu d1">
          <p className="lp-sec-s">
            Install once. Scaffold in seconds. Keep projects in sync forever with update and doctor.
          </p>
        </div>
      </div>

      <div className="lp-steps" role="list">
        {STEPS.map(({ num, title, desc, code, delay }) => (
          <div key={num} className={`lp-step-c lp-fu ${delay}`} role="listitem">
            <div className="lp-snum">{num}</div>
            <div className="lp-sttl">{title}</div>
            <p className="lp-sdsc">{desc}</p>
            <div className="lp-scde">{code}</div>
          </div>
        ))}
      </div>
    </>
  )
}
