"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set default theme to light
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);

    window.location.href = "./minimal";
  }, []);

  return <main className="relative min-h-screen w-full"></main>;
}
