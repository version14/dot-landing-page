const TECHS = [
  "TypeScript",
  "Go",
  "React",
  "Biome",
  "Monorepo",
  "Fullstack",
  "Microservices",
  "Express",
  "Better Auth",
  "OpenAPI",
  "Zod",
  "pnpm",
];

function MarqueeItem({ techs, hidden }: { techs: string[]; hidden?: boolean }) {
  return (
    <div className="lp-mq-i" aria-hidden={hidden}>
      {techs.map((tech) => (
        <span key={tech}>
          {tech}
          <span className="lp-mq-d" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function LandingMarquee() {
  return (
    <div className="lp-mq" aria-label="Supported technologies" role="marquee">
      <div className="lp-mq-t">
        <MarqueeItem techs={TECHS} />
        <MarqueeItem techs={TECHS} hidden />
      </div>
    </div>
  );
}
