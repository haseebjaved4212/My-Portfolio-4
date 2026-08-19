import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <footer className="py-12 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg font-semibold tracking-wider uppercase mb-2">
            Haseeb Javed
          </span>
          <p className="text-sm text-muted">
            Building modern digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="text-muted hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-muted hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-muted hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-muted hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="text-muted hover:text-accent transition-colors p-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted/60 font-mono">
        <p>© {new Date().getFullYear()} Haseeb Javed. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Engineered with Precision.</p>
      </div>
    </footer>
  );
}
