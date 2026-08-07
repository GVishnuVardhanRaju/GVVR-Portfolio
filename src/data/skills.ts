import type { IconType } from "react-icons";
import { SiPhp, SiReact, SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiMysql, SiPython, SiGit, SiNodedotjs, SiExpress, SiMongodb, SiVercel, SiGithub, SiOpenai } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode, TbDatabase } from "react-icons/tb";

export type Category = "Frontend" | "Backend" | "Databases" | "Languages" | "Tools" | "Cloud";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  categories: Category[];
}

export const SKILLS: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB", categories: ["Frontend"] },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", categories: ["Frontend", "Cloud"] },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", categories: ["Languages", "Frontend"] },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", categories: ["Languages", "Frontend"] },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", categories: ["Frontend"] },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", categories: ["Frontend"] },
  { name: "CSS", icon: SiCss, color: "#1572B6", categories: ["Frontend"] },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", categories: ["Backend"] },
  { name: "Express.js", icon: SiExpress, color: "#000000", categories: ["Backend"] },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", categories: ["Databases"] },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", categories: ["Databases"] },
  { name: "Python", icon: SiPython, color: "#3776AB", categories: ["Languages"] },
  { name: "Java", icon: FaJava, color: "#ED8B00", categories: ["Languages"] },
  { name: "C#.NET", icon: TbBrandCSharp, color: "#512BD4", categories: ["Languages"] },
  { name: "Git", icon: SiGit, color: "#F05032", categories: ["Tools"] },
  { name: "GitHub", icon: SiGithub, color: "#000000", categories: ["Tools", "Cloud"] },
  { name: "Vercel", icon: SiVercel, color: "#000000", categories: ["Cloud"] },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC", categories: ["Tools"] },
  { name: "AI Tools", icon: SiOpenai, color: "#10A37F", categories: ["Tools"] },
  { name: "PHP", icon: SiPhp, color: "#777BB4", categories: ["Backend"] },
  { name: "Oracle SQL", icon: TbDatabase, color: "#4479A1", categories: ["Databases"] },
];

export default SKILLS;
