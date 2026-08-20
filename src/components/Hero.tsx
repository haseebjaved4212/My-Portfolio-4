import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import resumePdf from "../../assets/Haseeb_FullStack_Dev_Resume.pdf";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/5 rounded-full blur-3xl mix-blend-screen opacity-50" />
        <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-accent">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.05] tracking-tight mb-8"
          >
            Building digital experiences that{" "}
            <span className="text-accent italic font-serif">feel</span> as good
            as they work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary/90 max-w-lg mb-10 leading-relaxed"
          >
            I build modern web applications and intelligent systems across the
            frontend, backend, and AI-powered automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-accent text-bg px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all hover:bg-accent/80"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 border border-border rounded-sm font-bold text-sm uppercase tracking-widest hover:border-accent transition-all group relative"
            >
              Let's Talk
            </a>

            <a
              href={resumePdf}
              download="Haseeb_FullStack_Dev_Resume.pdf"
              className="ml-auto flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center gap-6 text-muted"
          >
            <a
              href="https://github.com/haseebjaved4212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/haseeb-javed-0332b3341/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Haseebjaved4212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Abstract Developer Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex relative aspect-square w-full max-w-md ml-auto items-center justify-center border border-border/50 bg-surface/30 backdrop-blur-sm p-8"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent" />

          <div className="w-full h-full border border-border/50 relative overflow-hidden flex flex-col p-6">
            <div className="flex gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
            </div>

            <div className="space-y-4 font-mono text-xs text-muted/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="h-2 bg-accent/20 rounded w-3/4"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.7, ease: "circOut" }}
                className="h-2 bg-accent/10 rounded w-1/2"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.9, ease: "circOut" }}
                className="h-2 bg-accent/20 rounded w-5/6"
              />
              <div className="pt-8">
                <p className="text-accent/60">{"<System> initialized"}</p>
                <p className="mt-2 text-primary/40">await loadDependencies()</p>
                <p className="mt-2 text-primary/40">renderExperience()</p>
              </div>
            </div>

            {/* Spinning geometric shape */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-6 right-6 w-16 h-16 border border-accent/30 rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 border border-accent/20 rotate-45" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
