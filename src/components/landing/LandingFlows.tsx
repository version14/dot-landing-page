interface Flow {
  slug: string
  title: string
  desc: string
  tags: string[]
  delay: string
}

const FLOWS: Flow[] = [
  {
    slug: 'monorepo',
    title: 'Monorepo',
    desc: 'General-purpose TypeScript monorepo with optional React frontend and Biome formatter.',
    tags: ['TypeScript', 'React', 'Biome', 'pnpm'],
    delay: '',
  },
  {
    slug: 'fullstack',
    title: 'Fullstack',
    desc: 'TypeScript frontend + optional Go backend with decorator API, Zod validation, and OpenAPI v3.',
    tags: ['TypeScript', 'Go', 'OpenAPI', 'Better Auth'],
    delay: 'd1',
  },
  {
    slug: 'microservices',
    title: 'Microservices',
    desc: 'N independent services, each with its own name and port. Scales to any complexity without coupling.',
    tags: ['TypeScript', 'Multi-service', 'Independent ports'],
    delay: '',
  },
  {
    slug: 'plugin-template',
    title: 'Plugin Template',
    desc: 'A publishable dot plugin repository. Build generators for any language or pattern you need.',
    tags: ['Go', 'Plugin API', 'Publishable'],
    delay: 'd1',
  },
]

export function LandingFlows() {
  return (
    <>
      <div className="lp-sec-hdr" id="flows">
        <div className="lp-sec-hdr-l lp-fu">
          <div className="lp-sec-lbl">Built-in flows</div>
          <h2 className="lp-sec-h">
            Your stack,
            <br />
            out of the box.
          </h2>
        </div>
        <div className="lp-sec-hdr-r lp-fu d1">
          <p className="lp-sec-s">
            Four production-ready templates included. More available as community plugins.
          </p>
        </div>
      </div>

      <div className="lp-flows" role="list">
        {FLOWS.map(({ slug, title, desc, tags, delay }) => (
          <div key={slug} className={`lp-fl-c lp-fu ${delay}`} role="listitem">
            <div className="lp-fl-id">
              <span className="lp-fl-pre">$ dot scaffold&nbsp;</span>
              {slug}
            </div>
            <div className="lp-fl-ttl">{title}</div>
            <div className="lp-fl-dsc">{desc}</div>
            <div className="lp-fl-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
