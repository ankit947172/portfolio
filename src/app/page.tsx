"use client";

import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  Folder,
  MessageSquare,
  Lightbulb,
  PenTool,
  Quote,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="w-8 h-8 text-primary" />;
      case "bulb":
        return <Lightbulb className="w-8 h-8 text-primary" />;
      case "pen":
        return <PenTool className="w-8 h-8 text-primary" />;
      case "quote":
        return <Quote className="w-8 h-8 text-primary" />;
      default:
        return <Folder className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading font-bold text-xl"
          >
            Ankit Kumar<span className="text-primary">.</span>
          </motion.div>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-grid z-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent tracking-[0.2em] font-medium text-sm md:text-base block mb-4"
          >
            HELLO, I'M
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
            {portfolioData.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {portfolioData.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:bg-white/5 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {portfolioData.about.desc}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-primary" />{" "}
                  {portfolioData.about.location}
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-primary" />{" "}
                  {portfolioData.about.email}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <div className="pl-4 border-l-2 border-secondary/30">
                <h4 className="text-lg font-semibold text-white">
                  {portfolioData.about.education.degree}
                </h4>
                <p className="text-slate-400">
                  {portfolioData.about.education.school}
                </p>
                <p className="text-sm text-slate-500 mb-2">
                  {portfolioData.about.education.year}
                </p>
                <span className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded mb-4">
                  GPA: {portfolioData.about.education.gpa}
                </span>
                <div className="text-sm text-slate-400">
                  <strong className="text-slate-300">Coursework:</strong>{" "}
                  {portfolioData.about.education.coursework}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          >
            Tech <span className="text-primary">Stack</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {portfolioData.skills.map((category, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-primary hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          >
            Featured <span className="text-secondary">Projects</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-surface/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-secondary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {getIcon(project.icon || "folder")}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 h-20 overflow-hidden">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Get In <span className="text-accent">Touch</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-300 text-lg mb-10"
          >
            I am currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              variants={fadeInUp}
              href={`mailto:${portfolioData.about.email}`}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 transition-all"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-white hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-white hover:bg-white/5 transition-all"
            >
              <Github className="w-5 h-5" /> GitHub
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-slate-500 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> {portfolioData.about.phone}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>Designed & Built by Ankit Kumar &copy; 2026</p>
        <p className="text-xs mt-2 opacity-50">
          Built with Next.js, Tailwind & Framer Motion
        </p>
      </footer>
    </div>
  );
}
