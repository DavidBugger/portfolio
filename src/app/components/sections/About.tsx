"use client";

import { Code, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    percentage: 95,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    percentage: 90,
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "iOS", "Android"],
    percentage: 85,
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
    percentage: 88,
  },
];

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient project management ensuring timely delivery",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful and intuitive user interfaces",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Prioritizing client needs and exceeding expectations",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <p className="text-orange-500 font-semibold mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A passionate developer dedicated to building exceptional digital products
            that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              With over 5 years of experience in web and mobile development, I've had
              the privilege of working with startups, agencies, and enterprises to
              bring their visions to life. My journey began with a curiosity for how
              things work on the web, which evolved into a passion for creating
              seamless digital experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in full-stack development, combining modern frontend
              frameworks with robust backend solutions. My approach focuses on clean
              code, user-centric design, and scalable architecture that grows with
              your business.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-100 dark:border-orange-800">
                <p className="text-3xl font-bold text-orange-500">55+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Projects Delivered
                </p>
              </div>
              <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <p className="text-3xl font-bold text-blue-500">30+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-150">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.category} className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {skill.category}
                  </p>
                  <p className="text-orange-500 font-semibold">{skill.percentage}%</p>
                </div>
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            Download Resume
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}