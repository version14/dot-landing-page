interface FlowCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  delay?: string;
}

export function FlowCard({ slug, title, description, tags, delay = "" }: Readonly<FlowCardProps>) {
  return (
    <li className={`lp-fl-c lp-fu ${delay}`.trimEnd()}>
      <div className="lp-fl-id">
        <span className="lp-fl-pre">$ dot scaffold&nbsp;</span>
        {slug}
      </div>
      <div className="lp-fl-ttl">{title}</div>
      <div className="lp-fl-dsc">{description}</div>
      <div className="lp-fl-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </li>
  );
}
