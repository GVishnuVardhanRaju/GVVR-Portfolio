import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects, { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="frost-card frost-card-hover overflow-hidden"
  >
    <div className="relative h-52 overflow-hidden sm:h-56">
      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-lg font-semibold text-white drop-shadow">{project.title}</h3>
      </div>
    </div>

    <div className="p-5">
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full border border-sky-200/70 bg-sky-50/80 px-2.5 py-1 text-[11px] font-medium text-sky-700 dark:border-slate-700/70 dark:bg-slate-800/80 dark:text-slate-200">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] px-3.5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-200 hover:text-sky-700 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-sky-300">
            <Github size={14} /> GitHub
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8 section-panel dark:backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Projects</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Selected work with <span className="gradient-text">lasting impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;