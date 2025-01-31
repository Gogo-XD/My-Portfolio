"use client";
import { useTheme } from "../providers/ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="mx-auto fixed top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-normal-900 backdrop-blur-sm z-10 flex items-center px-4">
      <div className="flex-grow flex justify-center">
        <nav className="flex justify-center gap-4">
          <Link
            href="/minimal"
            className="text-gray-900 dark:text-white hover:text-gray-600"
          >
            Home
          </Link>
          {/* <Link
            href="/about"
            className="text-gray-900 dark:text-white hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-900 dark:text-white hover:text-gray-600"
          >
            Projects
          </Link> */}
          <Link
            href="/resume"
            className="text-gray-900 dark:text-white hover:text-gray-600"
          >
            Resume
          </Link>
        </nav>
      </div>

      <div className="absolute">
        <button onClick={toggleTheme} className="flex items-center">
          {theme === "dark" ? (
            <i
              className="fa-regular fa-moon text-5xl text-gray-300"
              style={{ width: "24px" }}
            ></i>
          ) : (
            <i
              className="fa-regular fa-sun text-5xl text-gray-800"
              style={{ width: "24px" }}
            ></i>
          )}
        </button>
      </div>
    </header>
  );
}
