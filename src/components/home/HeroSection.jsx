import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/home-images/hero-bg.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // smoother cubic ease
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
        className="relative z-10 max-w-4xl px-6 md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.p
          className="text-sky-500 tracking-widest uppercase text-base md:text-lg mb-4 font-semibold"
          variants={itemVariants}
        >
          Production Platform
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          variants={itemVariants}
        >
          SIMEX PROGRESS
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight"
          variants={itemVariants}
        >
          Quality and Production on Time
        </motion.h2>

        <motion.p
          className="text-white text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          variants={itemVariants}
        >
          Simex Progress has been supplying quality products to many major
          clothing brands since 2008. Our services cover the full supply chain
          from knitting fabric to finished garments and knitwear.
        </motion.p>

        <motion.button
          onClick={() => navigate("/about")}
          className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          More →
        </motion.button>
      </motion.div>
    </section>
  );
}
