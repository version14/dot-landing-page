import { Separator as BaseSeparator } from "@base-ui/react/separator";

interface NavSeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Separator({
  orientation = "vertical",
  className = "",
}: Readonly<NavSeparatorProps>) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={`lp-sep lp-sep-${orientation} ${className}`.trim()}
    />
  );
}
