"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const roles = ["Freelancer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Akanang_David_Ignatius_Resume.pdf";
    link.download = "Akanang_David_Ignatius_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                Hi, I'm a {" "}
                <span className="text-orange-500 font-semibold inline-block min-w-[140px]">
                  {roles[currentRole]}
                </span>
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                A Fullstack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Web Developer
                </span>
              </motion.h1>
            </div>

            <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Full-stack developer specializing in Python (Django, Flask, FastAPI), Laravel, and Next.js.
              Experienced with MongoDB, PostgreSQL, and MySQL databases. Passionate about building scalable
              applications and crafting clean, efficient code.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#projects" className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                <span>Explore Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>

              <motion.button
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center gap-2 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">33+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">5+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">30+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Orange blob background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob"></div>
            </div>

            {/* Profile Image Container */}
            <div className="relative z-10 mx-auto max-w-md">
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <Image
                      src="/images/profile3.png"
                      alt="Devdave - Web Developer"
                      width={700}
                      height={700}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Card 1 - Top Right */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-slate-800 dark:bg-slate-700 text-white px-6 py-4 rounded-2xl shadow-xl"
                >
                  <p className="text-sm font-medium text-slate-300">Web Developer</p>
                  <p className="text-xs text-slate-400 mt-1">5+ Years Experience</p>
                </motion.div>

                {/* Floating Card 2 - Bottom Left */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 px-8 py-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">33+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Project Completed</p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-orange-500 rounded-full"
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          50% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}