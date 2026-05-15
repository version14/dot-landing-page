import { CopyButton } from "./CopyButton";

interface InstallRowProps {
  tag: string;
  value: string;
  ariaLabel: string;
}

export function InstallRow({ tag, value, ariaLabel }: Readonly<InstallRowProps>) {
  return (
    <div className="lp-ir" role="listitem">
      <span className="lp-itag">{tag}</span>
      <span className="lp-ival-cmd" aria-label={value}>
        {value}
      </span>
      <CopyButton text={value} className="lp-cbtn" aria-label={ariaLabel} />
    </div>
  );
}
