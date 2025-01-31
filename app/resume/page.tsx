"use client";
import Header from "../components/Header";

export default function Resume() {
  return (
    <main className="relative h-[90vh] w-full">
      <header>
        <Header />
      </header>
      <div className="w-100ch h-[90vh] flex flex-col items-center">
        <div className="mb-4 flex">
          <a
            href="/Xinghao_Li_Resume_Main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <button className="bg-blue-300 text-gray-700 dark:bg-gray-900 dark:text-slate-200 w-40 h-10 rounded">
              Open in New Tab
            </button>
          </a>
          <a href="/Xinghao_Li_Resume_Main.pdf" download>
            <button className="bg-blue-300 text-gray-700 dark:bg-gray-900 dark:text-slate-200 w-40 h-10 rounded">
              Download
            </button>
          </a>
        </div>
        <iframe
          src="/Xinghao_Li_Resume_Main.pdf"
          className="w-[850px] h-full"
          title="Resume"
        ></iframe>
      </div>
    </main>
  );
}
