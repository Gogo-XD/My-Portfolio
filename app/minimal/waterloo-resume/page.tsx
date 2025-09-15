"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import Header from "../../components/Header";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Replace with your actual resume PDF path
  const resumePdfPath = "/Waterloo_Resume.pdf";

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfPath;
    link.download = "Xinghao_Li_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(resumePdfPath, "_blank");
  };

  return (
    <main className="min-h-screen bg-[var(--light-background)] text-[var(--light-foreground)] dark:bg-[var(--dark-background)] dark:text-[var(--dark-foreground)] transition-colors duration-[2000ms] ease-in-out">
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Waterloo SE Resume
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center rounded-2xl bg-[var(--dark-foreground)] px-5 py-2.5 text-sm font-medium text-[var(--dark-background)] transition-colors duration-[1000s] hover:opacity-90 dark:bg-[var(--light-foreground)] dark:text-[var(--light-background)]"
            aria-label="Download resume PDF"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </button>

          <button
            onClick={handleOpenNewTab}
            className="flex items-center rounded-2xl bg-[var(--dark-foreground)] px-5 py-2.5 text-sm font-medium text-[var(--dark-background)] transition-colors duration-[1000s] hover:opacity-90 dark:bg-[var(--light-foreground)] dark:text-[var(--light-background)]"
            aria-label="Open resume in new tab"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </button>
        </div>

        {/* PDF Viewer Container */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-gray-900">
            {/* Loading State */}
            {isLoading && (
              <div className="flex h-96 items-center justify-center">
                <div className="text-center">
                  <FileText className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p className="text-sm opacity-70">Loading resume...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="flex h-96 items-center justify-center">
                <div className="text-center">
                  <FileText className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p className="mb-4 text-sm opacity-70">
                    Unable to load PDF preview
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Instead
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PDF Embed */}
            {!hasError && (
              <iframe
                src={`${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                className={`h-[80vh] w-full rounded-2xl ${
                  isLoading ? "hidden" : "block"
                }`}
                onLoad={handleLoad}
                onError={handleError}
                title="Xinghao Li Resume"
                loading="eager"
              />
            )}
          </div>

          {/* Mobile Fallback Message */}
          <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 md:hidden">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              📱 For the best viewing experience on mobile, consider downloading
              the PDF or opening it in a new tab.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs opacity-60">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex justify-center pb-8">
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Xinghao Li
        </p>
      </footer>
    </main>
  );
}
