interface StepCardProps {
  num: string;
  title: string;
  description: string;
  code: React.ReactNode;
  delay?: string;
}

export function StepCard({ num, title, description, code, delay = "" }: Readonly<StepCardProps>) {
  return (
    <div className={`lp-step-c lp-fu ${delay}`.trimEnd()} role="listitem">
      <div className="lp-snum">{num}</div>
      <div className="lp-sttl">{title}</div>
      <p className="lp-sdsc">{description}</p>
      <div className="lp-scde">{code}</div>
    </div>
  );
}
