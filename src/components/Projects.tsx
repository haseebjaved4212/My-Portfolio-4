import { motion } from 'motion/react';
import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center justify-between mb-12">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">03 / Selected Work</span>
              <span className="text-accent">→</span>
            </div>
            <p className="text-muted text-lg max-w-xl hidden">
              A collection of applications, experiments, and systems I've built.
            </p>
          </div>
          <div className="hidden h-[1px] flex-1 bg-border ml-8 mb-2" />
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Visual Side */}
      <div className={`md:col-span-7 ${!isEven ? 'md:order-2' : ''} group relative`}>
        <div className="aspect-[4/3] bg-surface border border-border flex items-center justify-center overflow-hidden relative">
          {/* Minimalist project representation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex flex-col items-center justify-center bg-bg/50 p-8"
          >
            <span className="text-6xl md:text-8xl opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700">
              {project.image}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
                backgroundSize: '2rem 2rem'
              }}
            />
          </motion.div>
        </div>
        {/* Decorative accent */}
        <div className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} w-24 h-24 border-b border-accent opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${isEven ? 'border-l' : 'border-r'}`} />
      </div>

      {/* Content Side */}
      <div className={`md:col-span-5 ${!isEven ? 'md:order-1' : ''} flex flex-col`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-accent opacity-50">0{index + 1}</span>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-primary/70 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="mb-8">
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-primary/80">
                <span className="text-accent font-mono mt-1 text-[10px]">▹</span>
                {feature}
              </li>
            ))}
            {project.features.length > 4 && (
              <li className="text-[10px] text-muted font-mono pl-5 pt-2">
                + {project.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-bg font-mono text-[9px] uppercase tracking-tighter border border-border">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              <Github className="w-4 h-4" />
              Source Code
              <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 inline-block">→</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
              <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 inline-block">→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
