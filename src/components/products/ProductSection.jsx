import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import womanImg from "../../assets/products-images/woman.jpg";
import manImg from "../../assets/products-images/man.jpg";
import childImg from "../../assets/products-images/child.jpg";
import { useTranslation } from "react-i18next"; // ✅ i18next qo‘shildi

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ProductSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const yOffset = -100; // adjust for navbar height
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);
  const { t } = useTranslation(); // ✅ translate chaqirildi

  const sections = t("productSection.sections", { returnObjects: true }); // ✅ array sifatida o‘qiladi

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16 lg:px-24">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {t("productSection.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            {t("productSection.titleHighlight")}
          </span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          {t("productSection.subtitle")}
        </p>
      </div>

      {/* Women's Clothing */}
      <section
        id="woman"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
      {/* Sections (Women / Men / Children) */}
      {sections.map((sec, i) => (
        <motion.div
          key={i}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24"
          className={`flex flex-col ${
            i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between gap-16 mb-24`}
        >
          <motion.div className="md:w-1/2 text-left space-y-4">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent"
            >
              Women’s Clothing
              {sec.title}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              Our range for women includes T-shirts, dresses, sweatshirts,
              hoodies, and tracksuits. Made from 100% cotton, our garments come
              in hundreds of designs, styles, and finishes with various knitted
              fabrics for premium comfort.
            </motion.p>
          </motion.div>
          <motion.div className="md:w-1/2 flex justify-center">
            <motion.img
              variants={itemVariants}
              src={womanImg}
              alt="Women's clothing"
              className="w-full max-w-xs h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] object-cover transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.07 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Men’s Clothing */}
      <section
        id="man"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 mb-24"
        >
          <motion.div className="md:w-1/2 text-left space-y-4">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent"
            >
              Men’s Clothing
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              We focus on comfort, durability, and natural fabrics for men’s
              fashion — providing stylish and breathable garments designed for
              active lifestyles.
            </motion.p>
          </motion.div>
          <motion.div className="md:w-1/2 flex justify-center">
            <motion.img
              variants={itemVariants}
              src={manImg}
              alt="Men's clothing"
              className="w-full max-w-xs h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] object-cover transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.07 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Children’s Clothing */}
      <section
        id="child"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24"
        >
          <motion.div className="md:w-1/2 text-left space-y-4">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent"
            >
              Children’s Clothing
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              Our kidswear collection combines modern design with safety and
              comfort — crafted from soft, eco-friendly materials that ensure
              quality and style.
            </motion.p>
          </motion.div>
          <motion.div className="md:w-1/2 flex justify-center">
            <motion.img
              variants={itemVariants}
              src={childImg}
              alt="Children's clothing"
              {sec.description}
            </motion.p>
          </motion.div>

          <motion.div className="md:w-1/2 flex justify-center">
            <motion.img
              variants={itemVariants}
              src={sec.image}
              alt={sec.title}
              className="w-full max-w-xs h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] object-cover transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.07 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </section>
      ))}
    </section>
  );
}
