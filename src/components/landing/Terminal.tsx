import { useEffect, useRef } from 'react'

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

type TermLine =
  | { type: 'prompt'; cmd: string }
  | { type: 'confirm'; key: string; value: string }
  | { type: 'info'; text: string }
  | { type: 'file'; path: string }
  | { type: 'done'; time: string }
  | { type: 'br' }

function renderLine(line: TermLine): HTMLElement {
  const d = document.createElement('div')

  if (line.type === 'br') {
    return document.createElement('br')
  }

  if (line.type === 'prompt') {
    d.innerHTML = `<span style="color:rgba(250,250,250,0.18)">$ </span><span id="ts"></span><span class="lp-tcur"></span>`
    return d
  }

  if (line.type === 'confirm') {
    d.innerHTML =
      `<span style="color:var(--gn)">✔</span>  ` +
      `<span style="color:rgba(250,250,250,0.25)">${line.key}</span>  ` +
      `<span style="color:rgba(250,250,250,0.18)">›</span>  ` +
      `<span style="color:var(--txt)">${line.value}</span>`
    return d
  }

  if (line.type === 'info') {
    d.innerHTML = `<span style="color:rgba(250,250,250,0.25)">${line.text}</span>`
    return d
  }

  if (line.type === 'file') {
    d.innerHTML = `<span style="color:var(--gn)">✓</span>  <span style="color:#7eb8f5">${line.path}</span>`
    return d
  }

  if (line.type === 'done') {
    d.innerHTML = `<span style="color:var(--txt)">  Done in <span style="color:var(--gn);font-weight:500">${line.time}</span></span>`
    return d
  }

  return d
}

function makeQuestion(label: string, opts: string[]): HTMLElement {
  const w = document.createElement('div')
  let h = `<div style="color:rgba(250,250,250,0.2);padding:0 4px"><span style="color:rgba(250,250,250,0.25)">✦</span>  ${label}</div>`
  opts.forEach((o, i) => {
    h +=
      i === 0
        ? `<div style="color:var(--txt);padding:0 4px;line-height:1.7"><span style="color:var(--txt)">❯</span>  ${o}</div>`
        : `<div style="color:rgba(250,250,250,0.16);padding:0 4px;line-height:1.7"><span style="opacity:0">❯</span>  ${o}</div>`
  })
  w.innerHTML = h
  return w
}

async function runTerminal(body: HTMLElement, signal: AbortSignal) {
  while (!signal.aborted) {
    body.innerHTML = ''

    // prompt line with cursor
    const promptEl = renderLine({ type: 'prompt', cmd: '' })
    body.appendChild(promptEl)
    if (signal.aborted) return
    await sleep(300)

    // type command
    const ts = promptEl.querySelector<HTMLElement>('#ts')!
    for (const c of 'dot scaffold') {
      if (signal.aborted) return
      ts.textContent += c
      await sleep(50)
    }
    promptEl.querySelector('.lp-tcur')?.remove()
    await sleep(440)
    body.appendChild(document.createElement('br'))

    // question 1
    const q1 = makeQuestion('Pick a flow', ['monorepo', 'fullstack', 'microservices', 'plugin-template'])
    body.appendChild(q1)
    await sleep(900)
    if (signal.aborted) return
    body.removeChild(q1)
    body.appendChild(renderLine({ type: 'confirm', key: 'flow', value: 'monorepo' }))

    await sleep(160)
    body.appendChild(document.createElement('br'))

    // question 2
    const q2 = makeQuestion('Include React?', ['yes', 'no'])
    body.appendChild(q2)
    await sleep(720)
    if (signal.aborted) return
    body.removeChild(q2)
    body.appendChild(renderLine({ type: 'confirm', key: 'react', value: 'yes' }))

    await sleep(160)
    body.appendChild(document.createElement('br'))

    // question 3
    const q3 = makeQuestion('Add Biome?', ['yes', 'no'])
    body.appendChild(q3)
    await sleep(680)
    if (signal.aborted) return
    body.removeChild(q3)
    body.appendChild(renderLine({ type: 'confirm', key: 'biome', value: 'yes' }))

    await sleep(260)
    body.appendChild(document.createElement('br'))
    body.appendChild(renderLine({ type: 'info', text: '○  Generating project…' }))
    await sleep(640)
    body.appendChild(document.createElement('br'))

    for (const path of [
      'packages/app/src/index.ts',
      'packages/server/main.go',
      'packages/shared/types.ts',
      'biome.json',
      'tsconfig.json',
      '.dot/spec.json',
    ]) {
      if (signal.aborted) return
      body.appendChild(renderLine({ type: 'file', path }))
      await sleep(145)
    }

    await sleep(320)
    body.appendChild(document.createElement('br'))
    body.appendChild(renderLine({ type: 'done', time: '1.4s' }))

    await sleep(3600)
  }
}

export function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bodyRef.current) return
    const controller = new AbortController()
    runTerminal(bodyRef.current, controller.signal)
    return () => controller.abort()
  }, [])

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
  )
}
