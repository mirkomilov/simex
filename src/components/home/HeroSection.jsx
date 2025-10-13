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
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
          className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {t("hero.button")} →
        </motion.button>
      </motion.div>
    </section>
  );
}
