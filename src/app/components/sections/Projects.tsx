"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web Apps", "Logistics & E-commerce", "AI & ML Solutions", "Tax & Audit Solutions", "Oil & Gas Solutions"];

const projects = [
  {
    id: 9,
    title: "VendRush Delivery Platform",
    category: "Logistics & E-commerce",
    tags: ["TypeScript", "Supabase", "Next.js", "PostGIS", "Edge Functions"],
    description: "Lead architect for a serverless hyperlocal delivery infrastructure. Built complex rider dispatch algorithms, real-time tracking systems, and secure end-to-end payment flows.",
    image: "/projects/vendrush.png",
    liveUrl: "https://vendrush.com",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 10,
    title: "Intelligent Flood Warning System",
    category: "AI & ML Solutions",
    tags: ["Python", "XGBoost", "LSTM", "Next.js", "FastAPI"],
    description: "High-impact environmental AI pipeline predicting coastal flooding via XGBoost/LSTM models. Featuring an interactive dashboard with real-time risk assessment maps.",
    image: "/projects/flood.png",
    // liveUrl: "https://github.com/DavidBugger",
    githubUrl: "https://github.com/DavidBugger/intelligent-flood-prediction",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 11,
    title: "Gonarlafiya Livestock AI",
    category: "AI & ML Solutions",
    tags: ["FastAPI", "Python", "ML Model", "GCP"],
    description: "AI-driven disease prediction API for farmers. Providing multilingual disease advice (English/Hausa) based on symptom analysis and historical data.",
    image: "/projects/gonar-lafiya.png",
    liveUrl: "https://gonar-lafiya-api.onrender.com/docs",
    githubUrl: "https://github.com/DavidBugger/gonar-lafiya-api",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 12,
    title: "CampLearn EdTech Core",
    category: "Web Apps",
    tags: ["Django", "PostgreSQL", "Redis", "Flutter"],
    description: "Scalable EdTech backend for high-concurrency exam results and interactive learning. Managed real-time data synchronization between cross-platform clients.",
    image: "/projects/camplearn.png",
    liveUrl: "https://camp-learn.onrender.com/api/docs/",
    githubUrl: "https://github.com/DavidBugger/camp-learn-backend",
    gradient: "from-purple-600 to-indigo-800",
  },
  {
    id: 1,
    title: "Zambis Petroleum Operations Portal",
    category: "Oil & Gas Solutions",
    tags: ["Django", "Paystack", 'Next.js', "PostgreSQL"],
    description: "An integrated digital operations platform for Zambis Petroleum, designed to streamline oilfield logistics, monitor equipment and asset utilization in real time, manage rentals and inventory, and support efficient operations across multiple field locations.",
    image: "/projects/zambis.png",
    liveUrl: "https://zambispetroleum.com",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-amber-500 to-slate-700",
  },
  {
    id: 3,
    title: "Oya Riyders Dashboard",
    category: "Web Apps",
    tags: ["Next.js", "Paystack", 'Supabase', 'FastAPI', "PostgreSQL"],
    description: "Analytics dashboard for ride bookings with real-time metrics",
    image: "/projects/oya_riyders.png",
    liveUrl: "https://oya-riyders-dashboard.vercel.app/",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "Mabiz Global",
    category: "Tax & Audit Solutions",
    tags: ["Django", "Paystack", "PostgreSQL"],
    description: "Designed and implemented the both the frontend & backend architecture for the Mabiz Global Website",
    image: "/projects/mabiz.png",
    liveUrl: "https://mabizglobal.com",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 6,
    title: "Learn Hausa Backend",
    category: "Web Apps",
    tags: ["Python", "DJango", "GraphQL", "WebSocket", "PostgreSQL"],
    description: "API for learning Hausa language with AI integrations ",
    image: "/projects/learn-hausa-backend.png",
    liveUrl: "https://github.com/DavidBugger/learn-hausa-backend.git",
    githubUrl: "https://github.com/DavidBugger/learn-hausa-backend.git",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: 7,
    title: "Ministry of Education, Bauchi State (Backend Engineer)",
    category: "Web Apps",
    tags: ["PHP", "MySQL", "Redis", "Backend", "Performance Tuning"],
    description: "Architected the backend for the BECE Result Portal, handling concurrent traffic for over 50,000 students. Introduced Redis caching to resolve legacy server response bottlenecks, drastically reducing latency during high-pressure result cycles. Optimized complex database queries and indexed large datasets to ensure 100% uptime and secure, real-time access for a high-traffic government platform.",
    image: "/projects/bece.png",
    liveUrl: "https://moebauchi.bu.gov.ng/bece_result/",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-blue-600 to-slate-800",
  },
  {
    id: 8,
    title: "Zac Motors Platform (Backend Engineer)",
    category: "Web Apps",
    tags: ["Backend", "API", "RESTful", "Automotive"],
    description: "Designed and implemented backend APIs powering the Zac Motors automotive platform. Built secure and scalable RESTful services to support vehicle listings, inquiries, and administrative workflows. Implemented database-driven business logic to manage inventory, user interactions, and operational data. Optimized API performance and query efficiency to ensure fast response times under production usage. Collaborated with frontend teams to ensure seamless API consumption and reliable system integration.",
    image: "/projects/zacmotors.png",
    liveUrl: "https://zacmotors.com/",
    githubUrl: "https://github.com/DavidBugger",
    gradient: "from-slate-700 to-orange-600",
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-orange-500 font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my recent projects that showcase my expertise in web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors duration-300 ${activeCategory === category
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-600"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Project Image/Icon */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {project.image.startsWith('/') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-8xl transform transition-transform duration-500 group-hover:scale-110">
                      {project.image}
                    </span>
                  )}

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-slate-900/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </motion.a>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </section>
  );
}