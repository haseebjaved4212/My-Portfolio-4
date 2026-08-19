import { motion } from 'motion/react';
import { skills } from '../data';
import { useEffect, useRef, useState } from 'react';

export function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="skills" className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent">02 /</span>
          <h2 className="text-2xl font-semibold tracking-wide uppercase">Technical Arsenal</h2>
          <div className="flex-1 h-[1px] bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <SkillCategory title="Frontend" items={skills.frontend} delay={0} />
          <SkillCategory title="Backend" items={skills.backend} delay={0.1} />
          <SkillCategory title="Database" items={skills.database} delay={0.2} />
          <SkillCategory title="Other Tools" items={skills.other} delay={0.3} />
        </div>
      </div>

      {/* Currently Learning Marquee */}
      <div className="border-t border-border pt-12 relative flex flex-col items-center">
        <p className="text-sm font-mono text-muted uppercase tracking-widest mb-6">
          Currently Exploring
        </p>
        <div 
          className="w-full overflow-hidden flex relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
          
          <motion.div
            animate={{ x: isHovered ? "-0%" : "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap gap-16 py-4 px-8 items-center"
          >
            {/* Duplicate array for seamless loop */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-3xl md:text-5xl font-bold text-transparent" style={{ WebkitTextStroke: '1px var(--accent)', opacity: 0.5 }}>
                  AI / ML
                </span>
                <span className="text-3xl md:text-5xl font-bold text-transparent" style={{ WebkitTextStroke: '1px var(--color-muted)', opacity: 0.2 }}>
                  MACHINE LEARNING
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, delay }: { title: string; items: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
        <div className="w-2 h-2 bg-accent" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((skill, index) => (
          <li key={index} className="text-muted font-mono text-sm flex items-center gap-2 group">
            <span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">›</span>
            <span className="group-hover:text-primary transition-colors">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
