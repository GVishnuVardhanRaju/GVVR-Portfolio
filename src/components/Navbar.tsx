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
  const [active, setActive] = useState<string>("#home");
  const fullName = "G Vishnu Vardhan Raju";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timer: number | undefined;

    const step = () => {
      if (!deleting) {
        index += 1;
        setDisplayText(fullName.slice(0, index));

        if (index === fullName.length) {
          timer = window.setTimeout(() => {
            deleting = true;
            step();
          }, 900);
          return;
        }

        timer = window.setTimeout(step, 110);
      } else {
        index -= 1;
        setDisplayText(fullName.slice(0, index));

        if (index === 0) {
          timer = window.setTimeout(() => {
            deleting = false;
            step();
          }, 300);
          return;
        }

        timer = window.setTimeout(step, 60);
      }
    };

    step();

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [fullName]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
  <>
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:px-6"
    >
      <div className="flex w-full max-w-6xl items-center rounded-full border border-slate-200/70 bg-white/75 px-3 py-2 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/75 sm:px-5">

        {/* =========================
            NAME
        ========================== */}
        <div className="min-w-0 flex-1 md:flex-none">
          <span
            className="
              block
              whitespace-nowrap
              text-[13px]
              font-semibold
              tracking-tight
              text-slate-800
              dark:text-slate-100
              sm:text-base
              md:text-lg
            "
          >
            {displayText}
            <span className="ml-0.5 text-sky-500">|</span>
          </span>
        </div>

        {/* =========================
            DESKTOP NAV LINKS
        ========================== */}
        <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === link.href
                  ? "bg-sky-100 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:bg-sky-500/15 dark:text-sky-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-slate-600 hover:bg-white/90 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-sky-300"
              }`}
            >
              {link.label}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-white/90 hover:text-sky-700 dark:text-slate-300"
          >
            Resume
          </a>
        </div>

        {/* =========================
            RIGHT SIDE BUTTONS
        ========================== */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

          <ThemeToggle />

          <a
            href="https://github.com/GVishnuVardhanRaju"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-slate-200/70
              bg-white/75
              transition-all
              duration-300
              hover:scale-105
              hover:text-sky-700
              dark:border-slate-700/70
              dark:bg-slate-900/75
              dark:hover:text-sky-300
              sm:h-10
              sm:w-10
            "
          >
            <Github
              size={17}
              className="text-slate-700 dark:text-slate-100"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-slate-200/70
              bg-white/75
              transition-all
              duration-300
              hover:scale-105
              dark:border-slate-700/70
              dark:bg-slate-900/75
              sm:h-10
              sm:w-10
              md:hidden
            "
            aria-label="Menu"
          >
            {menuOpen ? (
              <X
                size={19}
                className="text-slate-700 dark:text-slate-100"
              />
            ) : (
              <Menu
                size={19}
                className="text-slate-700 dark:text-slate-100"
              />
            )}
          </button>
        </div>
      </div>
    </motion.nav>

    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(248,252,255,0.95)] backdrop-blur-xl dark:bg-[rgba(15,23,42,0.95)] md:hidden"
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08 + index * 0.06,
                duration: 0.35,
              }}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-semibold text-slate-800 transition-all duration-300 hover:text-sky-600 dark:text-slate-100"
            >
              {link.label}
            </motion.button>
          ))}

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35 }}
            href="/resume.pdf"
            download
            className="rounded-full bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] px-6 py-3 text-lg font-semibold text-white shadow-[0_15px_50px_-20px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
export default Navbar;