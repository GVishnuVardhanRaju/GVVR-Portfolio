import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Typing Effect
  const fullName = "G Vishnu Vardhan Raju";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullName.slice(0, index + 1));
      index++;

      if (index === fullName.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-14 md:h-16">
          
          {/* 🔥 Hacker Typing Name */}
          <span className="font-display font-bold text-sm md:text-base tracking-tight text-foreground whitespace-nowrap">
            {displayText}
            <span className="ml-1 animate-pulse text-primary">|</span>
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out rounded-full hover:bg-secondary/60"
              >
                {link.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              download
              className="ml-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out rounded-full hover:bg-secondary/60"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/GVishnuVardhanRaju"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github size={18} className="text-foreground" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-display font-bold text-foreground hover:text-primary transition-all duration-300"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              href="/resume.pdf"
              download
              className="mt-4 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-all hover:scale-105"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;