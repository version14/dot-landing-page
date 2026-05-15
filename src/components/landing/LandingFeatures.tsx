import { BentoCell } from "../ui/BentoCell";
import { SectionHeader } from "../ui/SectionHeader";
import { BentoTUI } from "./BentoTUI";

const TerminalIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const ExtensibleIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const DoctorIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const PipelineIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const PIPELINE_STEPS = ["TUI survey", "Spec", "Generators", "File tree", "Project on disk"];

const PipelineDescription = () => (
  <>
    Every scaffold runs the same flow. Reproducible, auditable, and the full spec is always written
    to <code className="lp-code">.dot/spec.json</code>.
  </>
);

export function LandingFeatures() {
  return (
    <>
      <SectionHeader
        id="features"
        label="Features"
        title={
          <>
            Built for the way
            <br />
            developers actually work.
          </>
        }
        subtitle="Answer prompts, get a project, ship it. No config files. No boilerplate hunting. No drift."
      />

      <div className="lp-bento" role="list">
        {/* TUI — wide cell, custom layout */}
        <div className="lp-bn-a" role="listitem">
          <div className="lp-bn-a-inner">
            <div className="lp-bn-a-body">
              <div className="lp-bc-icon" aria-hidden="true">
                <TerminalIcon />
              </div>
              <h3>Interactive TUI</h3>
              <p>
                A beautiful terminal survey guides every choice. Arrow keys, smart defaults, instant
                feedback — no YAML or config to maintain.
              </p>
            </div>
            <BentoTUI />
          </div>
        </div>

        <BentoCell
          icon={<ExtensibleIcon />}
          title="Extensible"
          description="Publish generators and plugins for any language or pattern. Compose them like building blocks. The plugin API is stable and public."
          className="lp-bn-b lp-fu d1"
        />

        <BentoCell
          icon={<DoctorIcon />}
          title="Update &amp; Doctor"
          description="Re-run generators against existing projects. Diagnose and fix drift between your spec and installed tools."
          className="lp-bn-c lp-fu"
        />

        <BentoCell
          icon={<PipelineIcon />}
          title="Deterministic pipeline"
          description={<PipelineDescription />}
          className="lp-bn-d lp-fu d1"
        >
          <div className="lp-pipeline" aria-label="Pipeline steps">
            {PIPELINE_STEPS.map((step, i) => (
              <span key={step} style={{ display: "contents" }}>
                <div className="lp-pip-s">{step}</div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <span className="lp-pip-a" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </BentoCell>
      </div>
    </>
  );
}
