"use client";

import { Code, Smartphone, Palette, Database, Cloud, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: [
      "React & Next.js applications",
      "Responsive design",
      "Progressive Web Apps",
      "E-commerce solutions",
    ],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "Flutter Apps",
      "iOS & Android development",
      "App Store optimization",
      "Push notifications",
    ],
    gradient: "from-orange-500 to-orange-600",
  },
  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description: "Beautiful and intuitive user interfaces",
  //   features: [
  //     "User research & testing",
  //     "Wireframing & prototyping",
  //     "Design systems",
  //     "Brand identity",
  //   ],
  //   gradient: "from-purple-500 to-purple-600",
  // },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust and scalable server-side solutions",
    features: [
      "RESTful APIs",
      "Database design",
      "Authentication & security",
      "Third-party integrations",
    ],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Deploy and scale your applications in the cloud",
    features: [
      "AWS & Azure deployment",
      "DevOps & CI/CD",
      "Server management",
      "Performance optimization",
    ],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Consulting",
    description: "Expert advice for your technical challenges",
    features: [
      "Technical architecture",
      "Code reviews",
      "Performance audits",
      "Team training",
    ],
    gradient: "from-orange-500 to-orange-600",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals, target audience, and project requirements",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating detailed roadmap, timeline, and technical specifications",
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting beautiful and functional user interfaces",
  },
  {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, maintainable code",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous quality assurance and user testing",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Deploying to production and ongoing maintenance",
  },
];

export default function ServicesPage() {
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
    <div className="min-h-screen" id="services">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-orange-500 font-semibold mb-4">Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              What I Can Do For You
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors duration-300 hover:shadow-xl"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                      >
                        <svg
                          className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-orange-500 font-semibold mb-2">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              How I Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A proven process that ensures quality results and client satisfaction
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-orange-500/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://wa.me/2348107701730?text=Thank%20you%20for%20your%20interest%20in%20my%20services.%20I'm%20here%20to%20help%20you%20with%20any%20questions%20or%20inquiries%20you%20may%20have."
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get In Touch
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}