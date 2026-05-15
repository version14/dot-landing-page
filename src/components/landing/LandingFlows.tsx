import { FlowCard } from "../ui/FlowCard";
import { SectionHeader } from "../ui/SectionHeader";

interface Flow {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  delay: string;
}

const FLOWS: Flow[] = [
  {
    slug: "monorepo",
    title: "Monorepo",
    desc: "General-purpose TypeScript monorepo with optional React frontend and Biome formatter.",
    tags: ["TypeScript", "React", "Biome", "pnpm"],
    delay: "",
  },
  {
    slug: "fullstack",
    title: "Fullstack",
    desc: "TypeScript frontend + optional Go backend with decorator API, Zod validation, and OpenAPI v3.",
    tags: ["TypeScript", "Go", "OpenAPI", "Better Auth"],
    delay: "d1",
  },
  {
    slug: "microservices",
    title: "Microservices",
    desc: "N independent services, each with its own name and port. Scales to any complexity without coupling.",
    tags: ["TypeScript", "Multi-service", "Independent ports"],
    delay: "",
  },
  {
    slug: "plugin-template",
    title: "Plugin Template",
    desc: "A publishable dot plugin repository. Build generators for any language or pattern you need.",
    tags: ["Go", "Plugin API", "Publishable"],
    delay: "d1",
  },
];

export function LandingFlows() {
  return (
    <>
      <SectionHeader
        id="flows"
        label="Built-in flows"
        title={
          <>
            Your stack,
            <br />
            out of the box.
          </>
        }
        subtitle="Four production-ready templates included. More available as community plugins."
      />

      <ul className="lp-flows">
        {FLOWS.map(({ slug, title, desc, tags, delay }) => (
          <FlowCard
            key={slug}
            slug={slug}
            title={title}
            description={desc}
            tags={tags}
            delay={delay}
          />
        ))}
      </ul>
    </>
  );
}
