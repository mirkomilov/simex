import { motion } from "framer-motion";
import heroBg from "../../assets/about.webp";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <>
      {/* Hero background */}
      <section
        className="relative w-full h-[55vh] flex flex-col justify-start items-start text-left overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        {/* Hero title */}
        <div className="relative z-10 px-6 md:px-16 pt-36 md:pt-40">
          <motion.p
            variants={itemVariants}
            className="text-sky-500 tracking-widest uppercase text-base md:text-lg mb-4 font-semibold"
          >
            Simex
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] tracking-tight"
          >
            About Us
          </motion.h1>
        </div>
      </section>
    </>
  );
}
