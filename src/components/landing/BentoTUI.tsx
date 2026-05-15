import { useEffect, useState } from "react";

interface Confirm {
  key: string;
  value: string;
}

type Frame =
  | { kind: "q"; confirms: Confirm[]; label: string; opts: string[] }
  | { kind: "gen"; confirms: Confirm[] };

const FRAMES: Frame[] = [
  {
    kind: "q",
    confirms: [],
    label: "Pick a flow",
    opts: ["monorepo", "fullstack", "microservices"],
  },
  {
    kind: "q",
    confirms: [{ key: "flow", value: "monorepo" }],
    label: "Include React?",
    opts: ["yes", "no"],
  },
  {
    kind: "q",
    confirms: [
      { key: "flow", value: "monorepo" },
      { key: "react", value: "yes" },
    ],
    label: "Add Biome?",
    opts: ["yes", "no"],
  },
  {
    kind: "gen",
    confirms: [
      { key: "flow", value: "monorepo" },
      { key: "react", value: "yes" },
      { key: "biome", value: "yes" },
    ],
  },
];

export function BentoTUI() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % FRAMES.length), 1800);
    return () => clearInterval(id);
  }, []);

  const f = FRAMES[idx];

  return (
    <div className="lp-bn-a-preview" aria-hidden="true">
      <div className="lp-ba-pbar">
        <div className="lp-bpd lp-bpr" />
        <div className="lp-bpd lp-bpy" />
        <div className="lp-bpd lp-bpg" />
      </div>
      <div className="lp-ba-pbody lp-btu" key={idx}>
        <div>
          <span className="lp-dim2">$ </span>
          <span className="lp-hl">dot scaffold</span>
        </div>
        <br />
        {f.confirms.map((c) => (
          <div key={c.key}>
            <span className="lp-ac">✔</span>&nbsp;&nbsp;
            <span className="lp-dim2">{c.key}</span>&nbsp;&nbsp;
            <span className="lp-dim2">›</span>&nbsp;&nbsp;
            <span className="lp-hl">{c.value}</span>
          </div>
        ))}
        {f.confirms.length > 0 && <br />}
        {f.kind === "q" && (
          <>
            <div>
              <span className="lp-dim2">✦&nbsp;&nbsp;</span>
              {f.label}
            </div>
            {f.opts.map((opt, i) =>
              i === 0 ? (
                <div key={opt}>
                  &nbsp;&nbsp;<span className="lp-ac">❯&nbsp;&nbsp;{opt}</span>
                </div>
              ) : (
                <div key={opt}>
                  <span className="lp-dim2">&nbsp;&nbsp;&nbsp;&nbsp;{opt}</span>
                </div>
              ),
            )}
          </>
        )}
        {f.kind === "gen" && (
          <div>
            <span className="lp-dim2">○&nbsp;&nbsp;Generating project…</span>
          </div>
        )}
      </div>
    </div>
  );
}
