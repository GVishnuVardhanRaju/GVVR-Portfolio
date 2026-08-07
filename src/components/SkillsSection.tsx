import { motion } from "framer-motion";
import SKILLS, { Skill } from "@/data/skills";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.04, y: -4 }}
      className="frost-card frost-card-hover flex min-h-[144px] flex-col items-center justify-center rounded-[1.35rem] p-5 text-center dark:border-slate-700/60 dark:bg-slate-950/70"
      role="article"
      aria-label={skill.name}
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}16)`, ["--icon-color" as string]: skill.color }}
      >
        <Icon size={24} className="skill-icon" data-dark-fallback={skill.color === "#000000" ? "true" : "false"} />
      </div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8 section-panel dark:backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-400">Skills</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Built with <span className="gradient-text">modern tools</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
