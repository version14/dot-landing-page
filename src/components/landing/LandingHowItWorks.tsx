import { StepCard } from "../ui/StepCard";
import { SectionHeader } from "../ui/SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Install dot",
    desc: "One command via Homebrew, curl, or go install. Works on macOS, Linux, and Windows.",
    code: (
      <>
        <span className="lp-sc-d">$</span> brew install version14/tap/dot
      </>
    ),
    delay: "",
  },
  {
    num: "02",
    title: "Pick a flow",
    desc: "Run dot scaffold, answer a few questions. Choose your stack, language, and patterns.",
    code: (
      <>
        <span className="lp-sc-d">$</span> dot scaffold <span className="lp-sc-w">monorepo</span>
      </>
    ),
    delay: "d1",
  },
  {
    num: "03",
    title: "Ship",
    desc: "Your project is ready on disk. Use dot update or dot doctor to keep it in sync.",
    code: (
      <>
        <span className="lp-sc-g">✓</span> Done in <span className="lp-sc-w">1.4s</span>
      </>
    ),
    delay: "d2",
  },
];

export function LandingHowItWorks() {
  return (
    <>
      <SectionHeader
        label="How it works"
        title={
          <>
            Three steps from
            <br />
            zero to project.
          </>
        }
        subtitle="Install once. Scaffold in seconds. Keep projects in sync forever with update and doctor."
      />

      <div className="lp-steps" role="list">
        {STEPS.map(({ num, title, desc, code, delay }) => (
          <StepCard
            key={num}
            num={num}
            title={title}
            description={desc}
            code={code}
            delay={delay}
          />
        ))}
      </div>
    </>
  );
}
