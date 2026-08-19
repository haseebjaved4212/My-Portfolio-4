import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { skills, projects } from '../data';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const { toggleTheme } = useTheme();
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setHistory([{ command: 'whoami', output: getOutput('whoami') }]);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const getOutput = (cmd: string): React.ReactNode => {
    switch (cmd.toLowerCase()) {
      case 'help':
        return (
          <div className="text-muted">
            <p>Available commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2 mt-2">
              <span className="text-accent">about</span><span>Learn more about Haseeb</span>
              <span className="text-accent">skills</span><span>View technical skills</span>
              <span className="text-accent">projects</span><span>View featured projects</span>
              <span className="text-accent">contact</span><span>Contact Haseeb</span>
              <span className="text-accent">github</span><span>Open GitHub</span>
              <span className="text-accent">linkedin</span><span>Open LinkedIn</span>
              <span className="text-accent">clear</span><span>Clear terminal</span>
              <span className="text-accent">theme</span><span>Toggle website theme</span>
              <span className="text-accent">whoami</span><span>Display developer profile</span>
            </div>
          </div>
        );
      case 'about':
        return 'Full-Stack Developer building modern web applications, intelligent systems, and polished digital experiences.';
      case 'skills':
        return (
          <div className="space-y-1">
            <p><span className="text-accent">Frontend:</span> {skills.frontend.join(', ')}</p>
            <p><span className="text-accent">Backend:</span> {skills.backend.join(', ')}</p>
            <p><span className="text-accent">Database:</span> {skills.database.join(', ')}</p>
            <p><span className="text-accent">Other:</span> {skills.other.join(', ')}</p>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-1">
            {projects.map((p) => (
              <p key={p.id}>
                <span className="text-accent">[{p.id}]</span> {p.title} - {p.technologies.slice(0,3).join(', ')}
              </p>
            ))}
          </div>
        );
      case 'contact':
        return 'Email: contactimhaseeb@gmail.com';
      case 'github':
        window.open('https://github.com/haseebjaved4212', '_blank');
        return 'Opening GitHub profile...';
      case 'linkedin':
        window.open('https://www.linkedin.com/in/haseeb-javed-0332b3341/', '_blank');
        return 'Opening LinkedIn profile...';
      case 'theme':
        toggleTheme();
        return 'Toggling theme...';
      case 'whoami':
        return (
          <div>
            <p className="text-accent">Haseeb Javed</p>
            <p>Full-Stack Developer</p>
          </div>
        );
      default:
        return <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { command: cmd, output: getOutput(cmd) }]);
    }
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:w-[600px] h-[80vh] md:h-[500px] bg-[#111] border border-[#222] rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#0A0A0A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[#888] text-xs">haseeb@portfolio:~</span>
              <button onClick={onClose} className="text-[#888] hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto text-[#E0E0E0]"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="space-y-4">
                {history.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 text-accent">
                      <span>haseeb@portfolio:~$</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                    <div className="mt-1 ml-2 text-gray-300">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
                <span className="text-accent">haseeb@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                  spellCheck="false"
                  autoComplete="off"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
