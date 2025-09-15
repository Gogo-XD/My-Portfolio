"use client";

// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Headshot from "../../public/Xinghao_Headshot_2.jpg";
import Header from "../components/Header";

/**
 * Minimal, no-scroll landing page for a personal portfolio.
 * Drop this file in `app/page.tsx` (Next.js App Router).
 * Put your photo at `/public/me.jpg` or update the `src` below.
 *
 * Dark mode toggle: this component manages a `dark` class on <html> and
 * persists the preference in localStorage. Be sure Tailwind is set to
 * `darkMode: 'class'` in `tailwind.config.js`.
 *
 * Uses CSS variables from globals.css for colors.
 */

const ENABLE_SECRET = false; // Toggle to true when your advanced section is ready

export default function Landing() {
  return (
    <main className="h-dvh overflow-hidden bg-[var(--light-background)] text-[var(--light-foreground)] dark:bg-[var(--dark-background)] dark:text-[var(--dark-foreground)] transition-colors duration-[2000ms] ease-in-out">
      <Header />

      <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[220px_1fr]"
          aria-labelledby="intro-heading"
        >
          <div className="mx-auto md:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-2xl dark:ring-white/10 transition-colors duration-[2000ms] ease-in-out">
              <Image
                src={Headshot}
                alt="Portrait of Xinghao Li"
                fill
                priority
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <header className="space-y-2">
              <h1
                id="intro-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl transition-colors duration-[2000ms] ease-in-out"
              >
                Xinghao Li
              </h1>
              <p className="text-sm/relaxed opacity-80 md:text-base transition-colors duration-[2000ms] ease-in-out">
                Software Engineering @ University of Waterloo
              </p>
            </header>

            <p className="mx-auto max-w-prose text-pretty opacity-80 transition-colors duration-[2000ms] ease-in-out">
              Hi, I&apos;m Xinghao (he/him), a software engineering student at
              the University of Waterloo. I love building things, learning new
              technologies, and exploring the intersection of design and code. I
              am super passionate about the intersection of AI and Software,
              with Biotechnology and Healthcare.
            </p>

            <p className="mx-auto max-w-prose text-pretty opacity-80 transition-colors duration-[2000ms] ease-in-out">
              Prev: Intern @{" AuraData Inc"} | Full-Stack Software Developer
            </p>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              {/* Primary contact/action */}
              <a
                href="mailto:xinghaoli.2006@gmail.com"
                aria-label="Email me"
                className="rounded-2xl bg-[var(--dark-foreground)] px-5 py-2.5 text-sm font-medium text-[var(--dark-background)] transition-colors duration-[2000ms] ease-in-out hover:opacity-90 dark:bg-[var(--light-foreground)] dark:text-[var(--light-background)]"
              >
                Say hi
              </a>

              {/* Future: the cool/advanced side */}
              {ENABLE_SECRET ? (
                <Link
                  href="/lab"
                  aria-label="Enter the experimental side of my portfolio"
                  className="flex items-center rounded-2xl bg-[var(--light-foreground)] px-5 py-2.5 text-sm font-medium text-[var(--light-background)] transition-colors duration-[2000ms] ease-in-out hover:opacity-90 dark:bg-[var(--dark-foreground)] dark:text-[var(--dark-background)]"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <button
                  disabled
                  title="Coming soon"
                  onClick={() => alert("Coming soon ✨")}
                  className="flex items-center rounded-2xl border px-5 py-2.5 text-sm font-medium opacity-80 transition-colors duration-[2000ms] ease-in-out hover:opacity-100"
                >
                  Coming soon <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>

            {/* Optional social links */}
            <nav
              className="pt-2 text-sm opacity-70 transition-colors duration-[2000ms] ease-in-out"
              aria-label="Social links"
            >
              <ul className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <li>
                  <a
                    href="https://github.com/Gogo-XD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/xinghaoli2006/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.section>
      </div>

      {/* Subtle corner credit / footer (non-scrolling) */}
      <footer className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center transition-colors duration-[2000ms] ease-in-out">
        <p className="px-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Xinghao Li
        </p>
      </footer>
    </main>
  );
}
