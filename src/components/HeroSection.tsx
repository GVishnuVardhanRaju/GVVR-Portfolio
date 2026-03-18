import { motion } from "framer-motion";
import { Rocket, FolderOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-16">
      {/* Animated background blobs */}
      {/* 🔥 Enhanced Purple Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Top Right Glow */}
  <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-purple-500/30 blur-[120px]" />

  {/* Bottom Left Glow */}
  <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] rounded-full bg-indigo-500/25 blur-[140px]" />

  {/* Center Soft Glow */}
  <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-[100px]" />

</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">G Vishnu Vardhan Raju</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-primary mb-3">
            Frontend Developer | MCA Student
          </p>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md md:max-w-2xl mx-auto text-center">
           I craft modern, responsive, and interactive web experiences with a focus on performance and design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Rocket size={18} /> Explore Projects
          </a>
          <a
            href="https://github.com/GVishnuVardhanRaju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass font-semibold text-foreground transition-all hover:scale-105"
          >
            <FolderOpen size={18} /> View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
