"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "devdavesolutions@gmail.com",
    link: "mailto:devdavesolutions@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 81 0770 1730",
    link: "tel:+2348107701730",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abuja, Nigeria",
    link: "#",
  },
];

export default function Contact() {
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Schedule a call with me and let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Feel free to reach out through any of these channels or schedule a consultation call directly via the calendar. I'm always open
                to discussing new projects, creative ideas, or opportunities.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {info.title}
                      </p>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="pt-8">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                {[
                  {
                    name: 'github',
                    url: 'https://github.com/DavidBugger',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    name: 'linkedin',
                    url: 'https://linkedin.com/in/david-akanang-0789771a4/',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )
                  },
                  {
                    name: 'twitter',
                    url: 'https://x.com/@Davekido3',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )
                  }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Calendly Inline Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[600px] md:h-full min-h-[600px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          >
            <iframe
              src="https://calendly.com/davidakanang/consultation-call?hide_landing_page_details=1&hide_gdpr_banner=1"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Select a Date and Time"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}