import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import womanImg from "../../assets/products-images/woman.jpg";
import manImg from "../../assets/products-images/man.jpg";
import childImg from "../../assets/products-images/child.jpg";

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
  const { t } = useTranslation();

  // Smooth scroll when navigating with hash (#woman, #man, #child)
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const yOffset = -100; // navbar offset
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  // i18n translation object array
  const sections = [
    {
      id: "woman",
      title: t("productSection.sections.0.title"),
      description: t("productSection.sections.0.description"),
      image: womanImg,
    },
    {
      id: "man",
      title: t("productSection.sections.1.title"),
      description: t("productSection.sections.1.description"),
      image: manImg,
    },
    {
      id: "child",
      title: t("productSection.sections.2.title"),
      description: t("productSection.sections.2.description"),
      image: childImg,
    },
  ];

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

      {/* Sections Loop */}
      <div className="max-w-7xl mx-auto">
        {sections.map((sec, i) => (
          <motion.section
            key={sec.id}
            id={sec.id}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-16 mb-24`}
          >
            {/* LEFT — TEXT */}
            <motion.div
              className="md:w-1/2 text-left space-y-4"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                {sec.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {sec.description}
              </p>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <motion.img
                src={sec.image}
                alt={sec.title}
                className="w-full max-w-xs h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] object-cover transform hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.07 }}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
