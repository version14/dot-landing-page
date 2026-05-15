interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  id?: string;
}

export function SectionHeader({ label, title, subtitle, id }: Readonly<SectionHeaderProps>) {
  return (
    <div className="lp-sec-hdr" id={id}>
      <div className="lp-sec-hdr-l lp-fu">
        <div className="lp-sec-lbl">{label}</div>
        <h2 className="lp-sec-h">{title}</h2>
      </div>
      {subtitle && (
        <div className="lp-sec-hdr-r lp-fu d1">
          <p className="lp-sec-s">{subtitle}</p>
        </div>
      )}
    </div>
  );
}
