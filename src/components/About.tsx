import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">01 / Introduction</span>
          <span className="text-accent">→</span>
        </div>

        <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert prose-p:text-muted max-w-none"
          >
            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8">
              I am a developer interested in building complete digital products, from polished frontend experiences to robust backend systems and AI-powered automation.
            </p>
            <p className="mb-6 text-muted">
              My engineering approach is rooted in understanding the full lifecycle of a product. I don't just build isolated components; I design systems that communicate seamlessly, scale effectively, and deliver exceptional user experiences. 
            </p>
            <p className="text-muted">
              Whether I'm architecting a decoupled React/Django e-commerce platform, integrating Retrieval-Augmented Generation (RAG) for customer support agents, or crafting pixel-perfect interfaces, my goal remains the same: writing clean, maintainable code that solves real problems.
            </p>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>Backend Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>AI Automation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>DevOps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>Computer Networking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 border border-accent rounded-full" />
                  <span className="text-accent">AI / ML (Exploring)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border p-8 bg-surface/50 relative"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted/50">
              PROFILE.DAT
            </div>
            <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-xl font-mono text-accent">HJ</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Haseeb Javed</h3>
            <p className="text-sm text-muted mb-6">Software Engineer</p>
            
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted">Location</span>
                <span>PK</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted">Status</span>
                <span className="text-accent">Available</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-muted">Focus</span>
                <span>Full-Stack / AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
