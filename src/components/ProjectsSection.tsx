import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectAlcohol from "@/assets/projectAlcohol.png";
import projectCourier from "@/assets/projectCourier.png";
import projectAnimal from "@/assets/projectAnimal.png";
import projectGs from "@/assets/projectGS.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Global Sky Weather App",
    description:
      "Global Sky Weather App is a responsive React-based web application that provides real-time weather data for cities worldwide with an interactive and user-friendly interface.",
    image: projectGs,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://global-sky-weather-app.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/Global-Sky-Weather-App",
  },
  {
    title: "SwiftShip",
    description:
      "A project designed to simplify and streamline the movement of goods. The focus is on speed, reliability, and a seamless experience for anyone sending or receiving packages.",
    image: projectCourier,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://swift-ship-plum.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/SwiftShip",
  },
  {
    title: "Elixir Insight",
    description:
      "A project that explores the health and lifestyle benefits of moderate alcohol consumption. The goal is to educate and inform in a friendly, visually appealing way.",
    image: projectAlcohol,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://elixir-insight.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/Elixir-Insight",
  },
  {
    title: "The Circle of Animal Dreamland",
    description:
      "The goal of this project is to create a simple and user-friendly platform that connects animals with loving homes.",
    image: projectAnimal,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: "https://youtu.be/6pHMcDQzWqU?si=TAsSuuCIDDlyB2Ma",
    github:
      "https://github.com/GVishnuVardhanRaju/The-Circle-OF-Animal-Dreamland",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl border border-border bg-muted/30 overflow-hidden shadow-sm hover:shadow-md transition"
  >
    {/* Image */}
    <div className="p-3">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-display font-bold text-lg mb-2 text-foreground">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition"
          >
            <ExternalLink size={14} /> Explore
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition"
          >
            <Github size={14} /> GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-5 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Some things I've built
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;