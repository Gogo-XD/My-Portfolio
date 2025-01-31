"use client";
import Image from "next/image";
import { useState } from "react";
import headshot from "../../public/Xinghao_Headshot_2.jpg";
import Header from "../components/Header";

export default function Minimal() {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <main className="relative min-h-screen w-full">
      <header>
        <Header />
      </header>
      <div className="max-w-[800px] mx-auto flex flex-col w-full p-4 mt-16">
        <div className="rounded-lg  p-6 flex justify-center gap-6">
          <div className="relative w-80 h-80">
            <Image
              src={headshot}
              alt="Profile picture"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div>
              <h2 className="text-4xl text-gray-700 dark:text-gray-300 font-bold">
                Hi, I&apos;m
              </h2>
              <h1 className="text-6xl text-gray-900 dark:text-gray-100 font-bold">
                Xinghao Li
              </h1>
              <h2 className="text-lg text-gray-700 dark:text-gray-300">
                Software Engineer
              </h2>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Gogo-XD"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/xinghaoli2006"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="mailto:xinghaoli.2006@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <div className="border border-gray-700 dark:border-gray-300 pl-4 pr-4 pt-1 pb-1 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                  <a href="/resume" target="_blank" className="">
                    Resume
                  </a>
                </div>

                {/* <div className="border border-gray-700 dark:border-gray-300 pl-4 pr-4 pt-1 pb-1 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                  <a href="/about" className="flex items-center">
                    About Me <span className="text-sm pl-2">→</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-2 mt-8 justify-center bg-slate-200 dark:bg-slate-800 p-[0.5rem] rounded-lg">
            <button
              onClick={() => setActiveSection("experience")}
              className={`px-1 py-1 rounded-lg w-full ${
                activeSection === "experience"
                  ? "bg-blue-200 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
                  : "bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-gray-300"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("education")}
              className={`px-1 py-1 rounded-lg w-full ${
                activeSection === "education"
                  ? "bg-blue-200 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
                  : "bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-gray-300"
              }`}
            >
              Education
            </button>
          </div>

          {activeSection === "experience" && (
            <div className="mt-3 bg-slate-200 dark:bg-slate-800 rounded-lg p-6 shadow-lg dark:shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-slate-200">
                Experience
              </h2>
              <div className="m-4 pt-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Sep 2024 - Present
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  UW Orbital
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Software Engineering
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Worked on implementing critical temperature readings that
                    can detect overheating in the satellite and initiate
                    emergency protocols to reduce heat.
                  </li>
                  <li>
                    Working on developing communication software in the
                    ground-station backend to provide methods of communication
                    between the ground and the satellite in space.
                  </li>
                </ul>
              </div>
              <div className="m-4 pt-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Jul 2023 - Aug 2023
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Cadets Canada - Department of National Defense
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Staff Cadet - Full Time
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Worked as a shipwright staff cadet at Shearwater, Halifax to
                    supervise and ensure the safety of over 60 cadets at sailing
                    camp.
                  </li>
                  <li>
                    Learned and was certified for radio communication, first
                    aid, emergency first aid, and pleasure craft operation.
                  </li>
                </ul>
              </div>
              <div className="m-4 pt-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Sep 2021 - Apr 2024
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Metra Basketball Association
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scorekeeper - Part Time
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Active and efficient communication between players, coaches,
                    referees, and spectators to enforce a safe and fun playing
                    space for u10-u16 city basketball games
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeSection === "education" && (
            <div className="mt-3 bg-slate-200 dark:bg-slate-800 rounded-lg p-6 text-gray-900 dark:text-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Sep 2024 - Apr 2029
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  University of Waterloo
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  BAsc Software Engineering
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col mt-3 bg-slate-200 dark:bg-slate-800 rounded-lg p-6 shadow-lg dark:shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            Highlighted Projects
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-slate-200 dark:bg-slate-800 p-6 border border-gray-300 dark:border-gray-900 shadow-lg dark:shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                Hand-tracking Robotic Arm
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Using mediapipe and opencv, our project used live camera feed to
                track real-life hand movements, and translates those to a
                custom-built robotic arm that follows the user&apos;s hands.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Gogo-XD/Hand-Tracked-Robotic-Arm"
                  target="_blank"
                  className="text-cyan-700 hover:text-cyan-500  dark:text-cyan-300 dark:hover:text-cyan-500"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-slate-200 dark:bg-slate-800 p-6 border border-gray-300 dark:border-gray-900 shadow-lg dark:shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                Chess Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I developed a custom chess engine using the minimax algorithm
                with many optimizations, including alpha-beta pruning and
                move-ordering, with many more to come.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Gogo-XD/Chess-Engine"
                  target="_blank"
                  className="text-cyan-700 hover:text-cyan-500  dark:text-cyan-300 dark:hover:text-cyan-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
