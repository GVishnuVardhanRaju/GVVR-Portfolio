import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links = [
  {
    label: "vishnuvardhanraju01346@gmail.com",
    href: "mailto:vishnuvardhanraju01346@gmail.com",
    icon: SiGmail,
    accent: "text-red-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/g-vishnu-vardhan-raju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedin,
    accent: "text-blue-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/GVishnuVardhanRaju",
    icon: FaGithub,
    accent: "text-slate-800",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8 section-panel dark:backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Contact</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Let&apos;s build <span className="gradient-text">something refined</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="frost-card frost-card-hover flex items-center justify-between rounded-[1.35rem] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/70">
                    <Icon className={`${link.accent} dark:text-slate-100`} size={20} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-100">{link.label}</span>
                </div>
                <ArrowUpRight size={18} className="text-slate-500 dark:text-slate-300" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;