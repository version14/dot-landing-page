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

export function LandingFeatures() {
  return (
    <>
      <div className="lp-sec-hdr" id="features">
        <div className="lp-sec-hdr-l lp-fu">
          <div className="lp-sec-lbl">Features</div>
          <h2 className="lp-sec-h">
            Built for the way
            <br />
            developers actually work.
          </h2>
        </div>
        <div className="lp-sec-hdr-r lp-fu d1">
          <p className="lp-sec-s">
            Answer prompts, get a project, ship it. No config files. No boilerplate hunting. No
            drift.
          </p>
        </div>
      </div>

      <div className="lp-bento" role="list">
        {/* TUI — wide cell */}
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
            <div className="lp-bn-a-preview" aria-hidden="true">
              <div className="lp-ba-pbar">
                <div className="lp-bpd lp-bpr" />
                <div className="lp-bpd lp-bpy" />
                <div className="lp-bpd lp-bpg" />
              </div>
              <div className="lp-ba-pbody">
                <div>
                  <span className="lp-dim2">$ </span>
                  <span className="lp-hl">dot scaffold</span>
                </div>
                <br />
                <div>
                  <span className="lp-dim2">✦&nbsp;&nbsp;</span>Pick a flow
                </div>
                <div>
                  &nbsp;&nbsp;<span className="lp-ac">❯&nbsp;&nbsp;monorepo</span>
                </div>
                <div>
                  <span className="lp-dim2">&nbsp;&nbsp;&nbsp;&nbsp;fullstack</span>
                </div>
                <div>
                  <span className="lp-dim2">&nbsp;&nbsp;&nbsp;&nbsp;microservices</span>
                </div>
                <br />
                <div>
                  <span className="lp-dim2">✦&nbsp;&nbsp;</span>Include React?&nbsp;{" "}
                  <span className="lp-ac">❯ yes</span>
                  <span className="lp-dim2">&nbsp; no</span>
                </div>
                <div>
                  <span className="lp-dim2">✦&nbsp;&nbsp;</span>Add Biome?&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="lp-ac">❯ yes</span>
                  <span className="lp-dim2">&nbsp; no</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extensible */}
        <div className="lp-bcell lp-bn-b lp-fu d1" role="listitem">
          <div className="lp-bc-icon" aria-hidden="true">
            <ExtensibleIcon />
          </div>
          <h3>Extensible</h3>
          <p>
            Publish generators and plugins for any language or pattern. Compose them like building
            blocks. The plugin API is stable and public.
          </p>
        </div>

        {/* Doctor */}
        <div className="lp-bcell lp-bn-c lp-fu" role="listitem">
          <div className="lp-bc-icon" aria-hidden="true">
            <DoctorIcon />
          </div>
          <h3>Update &amp; Doctor</h3>
          <p>
            Re-run generators against existing projects. Diagnose and fix drift between your spec
            and installed tools.
          </p>
        </div>

        {/* Pipeline */}
        <div className="lp-bcell lp-bn-d lp-fu d1" role="listitem">
          <div className="lp-bc-icon" aria-hidden="true">
            <PipelineIcon />
          </div>
          <h3>Deterministic pipeline</h3>
          <p>
            Every scaffold runs the same flow. Reproducible, auditable, and the full spec is always
            written to{" "}
            <code style={{ fontFamily: "var(--fm)", fontSize: 11, color: "var(--dm)" }}>
              .dot/spec.json
            </code>
            .
          </p>
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
        </div>
      </div>
    </>
  );
}
