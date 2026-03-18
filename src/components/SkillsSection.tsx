import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { SiPhp, SiReact, SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiMysql, SiPython, SiGit, SiNodedotjs, SiExpress, SiMongodb, SiVercel, SiH2Database, SiGithub, SiOpenai } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode, TbDatabase } from "react-icons/tb";


interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const TechStack: Skill[] = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

const AdditionalSkills: Skill[] = [
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "C#.NET", icon: TbBrandCSharp, color: "#512BD4" },
  { name: "Oracle SQL", icon: TbDatabase, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Github", icon: SiGithub, color: "#000000" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "AI Tools", icon: SiOpenai, color: "#10A37F" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const SkillPill = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div variants={itemVariants} className="skill-pill">
      <Icon
  size={20}
  className={`shrink-0 ${
    skill.color === "#000000"
      ? "text-black dark:text-white"
      : ""
  }`}
  style={{ color: skill.color !== "#000000" ? skill.color : undefined }}
/>
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-5 relative">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </motion.div>

        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4"
          >
            🔹 Tech Stack
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {TechStack.map((s) => (
              <SkillPill key={s.name} skill={s} />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4"
          >
            🔹 Additional Skills
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {AdditionalSkills.map((s) => (
              <SkillPill key={s.name} skill={s} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
