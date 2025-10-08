import React from "react";
import { motion } from "framer-motion";

import acoola from "../assets/acoola.png";
import conceptclub from "../assets/conceptclub.png";
import artie from "../assets/artie.png";
import detmir from "../assets/detmir.png";
import melon from "../assets/melon.png";
import sela from "../assets/sela.png";
import urbantiger from "../assets/urbantiger.png";

const logos = [acoola, conceptclub, artie, detmir, melon, sela, urbantiger];

function Partners() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 tracking-tight text-center"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Partners
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center gap-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14 justify-items-center max-w-6xl mx-auto">
          {logos.slice(0, 4).map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 100, damping: 18 },
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-green-400 transition-all duration-300 w-44 h-24 md:w-52 md:h-28"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="h-12 sm:h-14 md:h-16 p-3 object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-10 md:gap-14 lg:gap-16">
          {logos.slice(4).map((logo, index) => (
            <motion.div
              key={index + 4}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 100, damping: 18 },
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
              className="flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-green-400 transition-all duration-300 w-44 h-24 md:w-52 md:h-28"
            >
              <img
                src={logo}
                alt={`partner-${index + 4}`}
                className="h-12 sm:h-14 md:h-16 p-3 object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Partners;
