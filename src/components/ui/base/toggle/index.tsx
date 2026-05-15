import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";

export type Theme = "light" | "dark" | "system";

const SunIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MonitorIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

interface ThemeToggleGroupProps {
  theme: Theme;
  onTheme: (t: Theme) => void;
  className?: string;
}

/**
 * Three-way theme picker built on Base UI ToggleGroup + Toggle.
 * Replaces the single cycling button with three explicit icon choices.
 */
export function ThemeToggleGroup({
  theme,
  onTheme,
  className = "",
}: Readonly<ThemeToggleGroupProps>) {
  return (
    <ToggleGroup
      value={[theme]}
      onValueChange={(vals) => {
        if (vals.length > 0) onTheme(vals[0] as Theme);
      }}
      className={`lp-theme-group ${className}`.trim()}
      aria-label="Theme"
    >
      <Toggle value="light" className="lp-theme-item" aria-label="Light theme">
        <SunIcon />
      </Toggle>
      <Toggle value="dark" className="lp-theme-item" aria-label="Dark theme">
        <MoonIcon />
      </Toggle>
      <Toggle value="system" className="lp-theme-item" aria-label="System theme">
        <MonitorIcon />
      </Toggle>
    </ToggleGroup>
  );
}
