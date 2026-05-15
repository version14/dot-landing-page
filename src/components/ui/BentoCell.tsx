interface BentoCellProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function BentoCell({
  icon,
  title,
  description,
  className = "",
  children,
}: Readonly<BentoCellProps>) {
  return (
    <div className={`lp-bcell ${className}`} role="listitem">
      <div className="lp-bc-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
