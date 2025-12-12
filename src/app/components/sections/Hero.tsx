"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const roles = ["Freelancer", "Mobile Developer", "UI/UX Designer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                Hi, I'm{" "}
                <span className="text-orange-500 font-semibold inline-block animate-in fade-in slide-in-from-bottom duration-500">
                  {roles[currentRole]}
                </span>
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                A Fullstack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Web Developer
                </span>
              </h1>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Full-stack developer specializing in Python (Django, Flask, FastAPI), Laravel, and Next.js.
              Experienced with MongoDB, PostgreSQL, and MySQL databases. Passionate about building scalable
              applications and crafting clean, efficient code.
            </p>

            <button className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              <span>Explore Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">55+</p>
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
            </div>
          </div>

          {/* Right Content - Image with Cards */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            {/* Orange blob background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob"></div>
            </div>

            {/* Profile Image Container */}
            <div className="relative z-10 mx-auto max-w-md">
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    
                    <Image
                      src="/images/profile2.png"
                      alt="Devdave - Web Developer"
                      width={700}
                      height={700}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Card 1 - Top Right */}
                <div className="absolute -top-6 -right-6 bg-slate-800 dark:bg-slate-700 text-white px-6 py-4 rounded-2xl shadow-xl animate-float-slow">
                  <p className="text-sm font-medium text-slate-300">Web Developer</p>
                  <p className="text-xs text-slate-400 mt-1">5+ Years Experience</p>
                </div>

                {/* Floating Card 2 - Bottom Left */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 px-8 py-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-float">
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">55+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Project Completed</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          50% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(12px);
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}