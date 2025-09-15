"use client";
// import { useTheme } from "../providers/ThemeProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      return;
    }
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) applyTheme(e.matches ? "dark" : "light");
    };
    try {
      mql.addEventListener("change", onChange);
    } catch {
      mql.addListener(onChange);
    }
    return () => {
      try {
        mql.removeEventListener("change", onChange);
      } catch {
        mql.removeListener(onChange);
      }
    };
  }, []);

  const applyTheme = (next: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4 hover:no-underline"
        aria-label="Go back home"
      >
        Home
      </Link>
      <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        className="rounded-2xl border px-3 py-1.5 text-xs font-medium transition-colors duration-[2000ms] ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
        title="Toggle light/dark"
      >
        {mounted ? (theme === "dark" ? "☀️ Light" : "🌙 Dark") : "Theme"}
      </button>
    </header>
  );
}
