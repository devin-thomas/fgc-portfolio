import { useEffect, useMemo, useState } from "react";
import type { ThemeMode } from "../content/types";

const THEME_STORAGE_KEY = "lilgohan-theme";

const resolveTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof document !== "undefined") {
      const current = document.documentElement.dataset.theme;
      if (current === "light" || current === "dark") {
        return current;
      }
    }

    return resolveTheme();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const metaTheme = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (metaTheme) {
      metaTheme.content = theme === "dark" ? "#090b0f" : "#f4efe5";
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return value;
};
