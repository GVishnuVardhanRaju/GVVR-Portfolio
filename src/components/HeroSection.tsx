import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const roles = ["Front End Developer", "Web Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[roleIndex];
    let idx = deleting ? word.length : 0;
    let direction = deleting ? -1 : 1;

    let delayTimeout: number | undefined;

    const tick = window.setInterval(() => {
      idx += direction;
      if (!deleting) setDisplay(word.slice(0, idx));
      else setDisplay(word.slice(0, Math.max(0, idx)));

      if (!deleting && idx === word.length) {
        delayTimeout = window.setTimeout(() => setDeleting(true), 900);
      }

      if (deleting && idx === 0) {
        setDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
      }
    }, deleting ? 60 : 110);

    return () => {
      window.clearInterval(tick);
      if (delayTimeout) window.clearTimeout(delayTimeout);
    };
  }, [roleIndex, deleting]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none hero-gradient opacity-90" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl rounded-[32px] border border-slate-200/70 bg-white/65 p-7 shadow-[0_30px_90px_-35px_rgba(56,189,248,0.3)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/65 sm:p-10 lg:p-14"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">G Vishnu Vardhan Raju</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 text-lg font-medium text-sky-700 dark:text-sky-200 sm:text-xl"
          >
            <span className="mr-2">{display}</span>
            <span className="inline-block h-6 w-1 animate-pulse bg-sky-500 align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            I craft polished web experiences with thoughtful interfaces, performant code, and a sharp eye for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_-18px_rgba(56,189,248,0.6)]"
            >
              Explore Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/GVishnuVardhanRaju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-white/75 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:scale-[1.02] hover:border-sky-200 hover:text-sky-700 dark:border-slate-700/70 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:text-sky-300"
            >
              <Github size={18} /> View GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="skill-pill">Available for Work</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">TypeScript</span>
            <span className="skill-pill">MCA Student</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
