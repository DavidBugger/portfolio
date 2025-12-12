"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web Apps", "Mobile Apps", "UI/UX Design", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Apps",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    description: "A full-featured e-commerce platform with real-time inventory management",
    image: "🛒",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    tags: ["React Native", "Firebase", "Charts"],
    description: "Mobile app for tracking workouts and nutrition with AI recommendations",
    image: "💪",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Apps",
    tags: ["React", "Node.js", "MongoDB"],
    description: "Analytics dashboard for SaaS businesses with real-time metrics",
    image: "📊",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Banking App Design",
    category: "UI/UX Design",
    tags: ["Figma", "Mobile", "Design System"],
    description: "Modern banking app interface with focus on user experience",
    image: "🏦",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 5,
    title: "Food Delivery Platform",
    category: "E-commerce",
    tags: ["Next.js", "Maps API", "Payments"],
    description: "Full-stack food delivery platform with real-time order tracking",
    image: "🍕",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile Apps",
    tags: ["Flutter", "GraphQL", "WebSocket"],
    description: "Social networking app with real-time messaging and stories",
    image: "📱",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-pink-500 to-purple-600",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <p className="text-orange-500 font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in web and mobile
            development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50 scale-105"
                  : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image/Icon */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-8xl transform transition-transform duration-500 group-hover:scale-110">
                  {project.image}
                </span>
                
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-slate-900/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5 text-slate-900" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}