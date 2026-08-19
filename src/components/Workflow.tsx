import { motion } from 'motion/react';

export function Workflow() {
  const steps = [
    {
      id: "01",
      title: "Understand",
      description: "Understand the problem, users, and requirements."
    },
    {
      id: "02",
      title: "Design",
      description: "Plan architecture, UX, and technical direction."
    },
    {
      id: "03",
      title: "Build",
      description: "Develop scalable frontend/backend systems."
    },
    {
      id: "04",
      title: "Refine",
      description: "Test, optimize, deploy, and continuously improve."
    }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent">04 /</span>
          <h2 className="text-2xl font-semibold tracking-wide uppercase">How I Build</h2>
          <div className="flex-1 h-[1px] bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-4xl md:text-5xl font-mono font-light text-border mb-6 group-hover:text-accent transition-colors duration-500">
                {step.id}
              </div>
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[1px] bg-border border-dashed" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
