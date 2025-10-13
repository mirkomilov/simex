import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ tarjima qo‘shildi

import acoola from "../../assets/home-images/acoola.png";
import conceptclub from "../../assets/home-images/conceptclub.png";
import artie from "../../assets/home-images/artie.png";
import detmir from "../../assets/home-images/detmir.png";
import melon from "../../assets/home-images/melon.png";
import sela from "../../assets/home-images/sela.png";
import urbantiger from "../../assets/home-images/urbantiger.png";
import fes from "../../assets/home-images/fes.png";

const logos = [
  acoola,
  conceptclub,
  artie,
  detmir,
  melon,
  sela,
  urbantiger,
  fes,
];

function Partners() {
  const { t } = useTranslation(); // ✅ i18n chaqirildi

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-extrabold text-gray-900 mb-12 text-center"
      >
        {t("partners.titlePrefix")}{" "}
        <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 bg-clip-text text-transparent">
          {t("partners.titleHighlight")}
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 * 0.05, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-10 justify-items-center"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              y: -3,
              transition: { type: "spring", stiffness: 120, damping: 15 },
            }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-[0_8px_25px_rgba(14,165,233,0.2)] hover:border-sky-600 transition-all duration-300 w-36 h-20 sm:w-44 sm:h-24 md:w-48 md:h-28"
          >
            <img
              src={logo}
              alt={`partner-${index}`}
              className="h-12 sm:h-14 md:h-16 p-3 object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Partners;
