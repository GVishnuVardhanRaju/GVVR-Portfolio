import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-5 relative">
      
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-xl relative z-10 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </motion.div>

        {/* 🔥 Contact Card */}
        {/* 🔥 Contact Items */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col gap-4 mt-6"
>

  {/* Email */}
  <div className="flex items-center gap-4 bg-muted/40 border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition min-w-0">
    <SiGmail className="text-red-500 shrink-0" size={22} />
    <a
      href="mailto:vishnuvardhanraju01346@gmail.com"
     className="text-sm sm:text-base text-foreground whitespace-nowrap overflow-hidden text-ellipsis"
    >
      vishnuvardhanraju01346@gmail.com
    </a>
  </div>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/g-vishnu-vardhan-raju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-muted/40 border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
  >
    <FaLinkedin className="text-blue-600 shrink-0" size={22} />
    <span className="text-base text-foreground">
      G Vishnu Vardhan Raju
    </span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/GVishnuVardhanRaju"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-muted/40 border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
  >
   <FaGithub className="text-black dark:text-white shrink-0" size={22} />
    <span className="text-base text-foreground">
      G Vishnu Vardhan Raju
    </span>
  </a>

</motion.div>
      </div>
    </section>
  );
};

export default ContactSection;