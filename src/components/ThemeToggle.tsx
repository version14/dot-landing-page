import { useCallback, useEffect, useRef, useState } from "react";
import { Select } from "./ui/base/select";

export type Theme = "light" | "dark" | "system";

function resolvedScheme(mode: Theme): "light" | "dark" {
  if (mode === "system") {
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
}

function applyTheme(mode: Theme) {
  const scheme = resolvedScheme(mode);
  document.querySelector(".lp")?.classList.toggle("lt", scheme === "light");
  document.documentElement.style.colorScheme = scheme;
}

export function useTheme() {
  const [themeState, setThemeState] = useState<Theme>("dark");
  const themeRef = useRef<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("lp-theme") as Theme) ?? "system";
    themeRef.current = stored;
    setThemeState(stored);
    applyTheme(stored);

    const mq = globalThis.matchMedia("(prefers-color-scheme: dark)");
    const onMqChange = () => {
      if (themeRef.current === "system") applyTheme("system");
    };
    mq.addEventListener("change", onMqChange);
    return () => mq.removeEventListener("change", onMqChange);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    themeRef.current = t;
    localStorage.setItem("lp-theme", t);
    setThemeState(t);
    applyTheme(t);
  }, []);

  return { theme: themeState, setTheme };
}

const SunIcon = () => (
  <svg
    width="14"
    height="14"
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
    width="14"
    height="14"
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
    width="14"
    height="14"
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

const CheckIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ICONS: Record<Theme, () => React.ReactElement> = {
  light: SunIcon,
  dark: MoonIcon,
  system: MonitorIcon,
};

interface ThemeToggleProps {
  theme: Theme;
  onTheme: (t: Theme) => void;
  className?: string;
}

export function ThemeToggle({ theme, onTheme, className = "" }: Readonly<ThemeToggleProps>) {
  const Icon = ICONS[theme];
  return (
    <Select.Root
      value={theme}
      onValueChange={(val) => {
        if (val) onTheme(val);
      }}
    >
      <Select.Trigger className={`lp-theme-trigger ${className}`.trim()} aria-label="Theme">
        <Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          sideOffset={6}
          align="end"
          alignItemWithTrigger={false}
          className="lp-theme-positioner"
        >
          <Select.Popup className="lp-theme-popup">
            <Select.List>
              <Select.Item value="light" className="lp-theme-item">
                <SunIcon />
                <Select.ItemText>Light</Select.ItemText>
                <Select.ItemIndicator className="lp-theme-check">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="dark" className="lp-theme-item">
                <MoonIcon />
                <Select.ItemText>Dark</Select.ItemText>
                <Select.ItemIndicator className="lp-theme-check">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="system" className="lp-theme-item">
                <MonitorIcon />
                <Select.ItemText>System</Select.ItemText>
                <Select.ItemIndicator className="lp-theme-check">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
