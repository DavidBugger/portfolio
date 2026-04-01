"use client";

import { useState } from "react";
import { Download, FileText, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeDownloadProps {
  variant?: "button" | "card";
  className?: string;
}

export default function ResumeDownload({
  variant = "button",
  className = "",
}: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Option 1: Direct download from public folder
      const link = document.createElement("a");
      link.href = "/Akanang_David_Ignatius_Resume_Updated.pdf"; // Make sure to place your resume.pdf in the public folder
      link.download = "Akanang_David_Ignatius_Resume_Updated.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate download time for better UX
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 3000);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Option 2: Generate PDF from HTML (if you want to generate dynamically)
  const handleGeneratePDF = async () => {
    setIsDownloading(true);

    try {
      // You can use libraries like jsPDF or html2canvas for dynamic PDF generation
      // For now, we'll just download a static file

      // Example with fetch (if your resume is hosted externally)
      // const response = await fetch('https://your-resume-url.com/resume.pdf');
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'DevDave_Resume.pdf';
      // link.click();
      // window.URL.revokeObjectURL(url);

      // For demo, using static file
      handleDownload();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  if (variant === "card") {
    return (
      <motion.div
        className={`relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="w-8 h-8" />
          </motion.div>

          <h3 className="text-2xl font-bold mb-2">Download My Resume</h3>
          <p className="text-white/80 mb-6">
            Get a detailed overview of my skills, experience, and projects
          </p>

          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative w-full flex items-center justify-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {isDownloading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Downloading...</span>
                </motion.div>
              ) : isDownloaded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Downloaded!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="text-xs text-white/60 mt-3 text-center">PDF • 2.5 MB</p>
        </div>
      </motion.div>
    );
  }

  // Button variant
  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isDownloading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Downloading...</span>
          </motion.div>
        ) : isDownloaded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Check className="w-5 h-5" />
            <span>Downloaded!</span>
          </motion.div>
        ) : (
          <motion.div
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// Alternative: Resume Preview Modal Component
export function ResumePreviewModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-6 py-3 rounded-full font-semibold transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-4 md:inset-10 bg-white dark:bg-slate-900 rounded-2xl z-50 overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Resume Preview
                </h3>
                <div className="flex items-center gap-4">
                  <ResumeDownload variant="button" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>
              </div>

              {/* PDF Preview */}
              <div className="flex-1 overflow-auto p-6">
                <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
                  {/* Embed PDF or use an iframe */}
                  <iframe
                    src="/resume.pdf"
                    className="w-full h-[800px] rounded-lg"
                    title="Resume Preview"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}