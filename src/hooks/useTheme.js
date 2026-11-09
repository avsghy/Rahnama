import { useState, useEffect } from "react";
const KEY = "rahnama-theme";
function savedTheme() {
  try {
    return localStorage.getItem(KEY);
  } catch (e) {
    return null;
  }
}
function initial() {
  const saved = savedTheme() || document.documentElement.dataset.theme;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
export default function useTheme() {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
  }, [theme]);
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggle };
}
