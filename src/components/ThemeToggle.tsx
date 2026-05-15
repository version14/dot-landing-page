import { useCallback, useEffect, useRef, useState } from "react";
import type { Theme } from "./ui/base/toggle";
import { ThemeToggleGroup } from "./ui/base/toggle";

export type { Theme };

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

export { ThemeToggleGroup as ThemeToggle };
