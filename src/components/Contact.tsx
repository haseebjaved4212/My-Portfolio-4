import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Copy, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contactimhaseeb@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Missing VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, or VITE_EMAILJS_PUBLIC_KEY",
        );
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs text-accent">05 /</span>
              <h2 className="text-2xl font-semibold tracking-wide uppercase">
                Let's Build Something
              </h2>
            </div>

            <p className="text-xl text-muted leading-relaxed mb-12 max-w-md">
              Have a project, idea, or opportunity? I'd love to hear about it.
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
                  Direct Email
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:contactimhaseeb@gmail.com"
                    className="text-lg hover:text-accent transition-colors flex items-center gap-3"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    contactimhaseeb@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 border border-border hover:bg-surface transition-colors rounded-sm relative group"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted group-hover:text-primary" />
                    )}
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono bg-primary text-bg px-2 py-1 rounded-sm">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
                  Socials
                </p>
                <div className="flex flex-col gap-3 font-medium">
                  <a
                    href="https://www.linkedin.com/in/haseeb-javed-0332b3341/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent font-mono text-xs">▹</span>{" "}
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/haseebjaved4212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent font-mono text-xs">▹</span>{" "}
                    GitHub
                  </a>
                  <a
                    href="https://x.com/Haseebjaved4212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent font-mono text-xs">▹</span> X
                    (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-8 border border-border"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full bg-bg border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full bg-bg border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-bg border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-bg border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-bg py-4 text-sm font-medium hover:bg-accent hover:text-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm mt-4 p-3 bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-4 p-3 bg-red-500/10 border border-red-500/20">
                  <AlertCircle className="w-4 h-4" />
                  Failed to send message. Please try again or use direct email.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
