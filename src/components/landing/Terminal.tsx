import { useEffect, useRef } from "react";

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

type TermLine =
  | { type: "prompt"; cmd: string }
  | { type: "confirm"; key: string; value: string }
  | { type: "info"; text: string }
  | { type: "file"; path: string }
  | { type: "done"; time: string }
  | { type: "br" };

function renderLine(line: TermLine): HTMLElement {
  const d = document.createElement("div");

  if (line.type === "br") {
    return document.createElement("br");
  }

  if (line.type === "prompt") {
    d.innerHTML = `<span style="color:var(--t-dim)">$ </span><span id="ts"></span><span class="lp-tcur"></span>`;
    return d;
  }

  if (line.type === "confirm") {
    d.innerHTML =
      `<span style="color:var(--gn)">✔</span>  ` +
      `<span style="color:var(--t-mid)">${line.key}</span>  ` +
      `<span style="color:var(--t-dim)">›</span>  ` +
      `<span style="color:var(--txt)">${line.value}</span>`;
    return d;
  }

  if (line.type === "info") {
    d.innerHTML = `<span style="color:var(--t-mid)">${line.text}</span>`;
    return d;
  }

  if (line.type === "file") {
    d.innerHTML = `<span style="color:var(--gn)">✓</span>  <span style="color:var(--t-file)">${line.path}</span>`;
    return d;
  }

  if (line.type === "done") {
    d.innerHTML = `<span style="color:var(--txt)">  Done in <span style="color:var(--gn);font-weight:500">${line.time}</span></span>`;
    return d;
  }

  return d;
}

function makeQuestion(label: string, opts: string[]): HTMLElement {
  const w = document.createElement("div");
  let h = `<div style="color:var(--t-dim);padding:0 4px"><span style="color:var(--t-mid)">✦</span>  ${label}</div>`;
  opts.forEach((o, i) => {
    h +=
      i === 0
        ? `<div style="color:var(--txt);padding:0 4px;line-height:1.7"><span style="color:var(--txt)">❯</span>  ${o}</div>`
        : `<div style="color:var(--t-faint);padding:0 4px;line-height:1.7"><span style="opacity:0">❯</span>  ${o}</div>`;
  });
  w.innerHTML = h;
  return w;
}

async function typeCommand(promptEl: HTMLElement, signal: AbortSignal): Promise<boolean> {
  const ts = promptEl.querySelector<HTMLElement>("#ts");
  for (const c of "dot scaffold") {
    if (signal.aborted) return false;
    if (ts) ts.textContent += c;
    await sleep(50);
  }
  return true;
}

async function askQuestion(
  body: HTMLElement,
  signal: AbortSignal,
  question: string,
  opts: string[],
  key: string,
  value: string,
  delayMs: number,
): Promise<boolean> {
  const q = makeQuestion(question, opts);
  body.appendChild(q);
  await sleep(delayMs);
  if (signal.aborted) return false;
  q.remove();
  body.appendChild(renderLine({ type: "confirm", key, value }));
  await sleep(160);
  body.appendChild(document.createElement("br"));
  return true;
}

async function generateFiles(body: HTMLElement, signal: AbortSignal): Promise<boolean> {
  for (const path of [
    "packages/app/src/index.ts",
    "packages/server/main.go",
    "packages/shared/types.ts",
    "biome.json",
    "tsconfig.json",
    ".dot/spec.json",
  ]) {
    if (signal.aborted) return false;
    body.appendChild(renderLine({ type: "file", path }));
    await sleep(145);
  }
  return true;
}

async function runTerminal(body: HTMLElement, signal: AbortSignal) {
  while (!signal.aborted) {
    body.innerHTML = "";

    const promptEl = renderLine({ type: "prompt", cmd: "" });
    body.appendChild(promptEl);
    if (signal.aborted) return;
    await sleep(300);

    if (!(await typeCommand(promptEl, signal))) return;
    promptEl.querySelector(".lp-tcur")?.remove();
    await sleep(440);
    body.appendChild(document.createElement("br"));

    if (
      !(await askQuestion(
        body,
        signal,
        "Pick a flow",
        ["monorepo", "fullstack", "microservices", "plugin-template"],
        "flow",
        "monorepo",
        900,
      ))
    )
      return;
    if (!(await askQuestion(body, signal, "Include React?", ["yes", "no"], "react", "yes", 720)))
      return;
    if (!(await askQuestion(body, signal, "Add Biome?", ["yes", "no"], "biome", "yes", 680)))
      return;

    await sleep(260);
    body.appendChild(document.createElement("br"));
    body.appendChild(renderLine({ type: "info", text: "○  Generating project…" }));
    await sleep(640);
    body.appendChild(document.createElement("br"));

    if (!(await generateFiles(body, signal))) return;

    await sleep(320);
    body.appendChild(document.createElement("br"));
    body.appendChild(renderLine({ type: "done", time: "1.4s" }));

    await sleep(3600);
  }
}

export function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    const controller = new AbortController();
    runTerminal(bodyRef.current, controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <div className="lp-term">
      <div className="lp-tbar">
        <div className="lp-td lp-tr" />
        <div className="lp-td lp-ty" />
        <div className="lp-td lp-tg" />
        <div className="lp-ttl">zsh — dot scaffold</div>
      </div>
      <div className="lp-tbody" ref={bodyRef} />
    </div>
  );
}
