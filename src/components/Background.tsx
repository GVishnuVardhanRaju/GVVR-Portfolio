import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 20% 20%, rgba(56, 189, 248, 0.16), transparent 55%)," +
            "radial-gradient(640px circle at 82% 28%, rgba(96, 165, 250, 0.14), transparent 58%)," +
            "radial-gradient(700px circle at 48% 88%, rgba(186, 230, 253, 0.18), transparent 60%)",
        }}
      />

      <motion.div
        className="absolute -left-16 top-10 h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{ background: "rgba(56, 189, 248, 0.16)" }}
        animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute -right-8 bottom-[-90px] h-[480px] w-[480px] rounded-full blur-[150px]"
        style={{ background: "rgba(96, 165, 250, 0.16)" }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)] opacity-70" />
    </div>
  );
};

export default Background;
