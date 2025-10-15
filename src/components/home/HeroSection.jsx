import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 🔥 qo‘shildi
import heroBg from "../../assets/home-images/hero-bg.jpg";

export default function HeroSection() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 🔥 tarjima funksiyasi

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl md:max-w-4xl lg:max-w-5xl px-6 md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <motion.p
          className="text-sky-500 tracking-widest uppercase text-base md:text-lg mb-4 font-semibold"
          variants={itemVariants}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          variants={itemVariants}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight"
          variants={itemVariants}
        >
          {t("hero.slogan")}
        </motion.h2>

        <motion.p
          className="text-white text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          variants={itemVariants}
        >
          {t("hero.description")}
        </motion.p>

        <motion.button
          onClick={() => navigate("/about")}
          className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-sky-200/40 transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98]"
          whileHover={{
            scale: 1.03,
            y: -2,
            boxShadow: "0px 8px 20px rgba(14,165,233,0.3)",
            transition: { type: "spring", stiffness: 200, damping: 16 },
          }}
          whileTap={{
            scale: 0.96,
            y: 0,
            transition: { duration: 0.15, ease: "easeOut" },
          }}
          whileFocus={{
            scale: 1.01,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 0.8,
          }}
          variants={itemVariants}
        >
          {t("hero.button")} →
        </motion.button>
      </motion.div>
    </section>
  );
}
