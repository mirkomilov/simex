import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImg from "../../assets/about3.avif";

// 🔹 COUNTER COMPONENT
const Counter = ({ from = 0, to, duration = 1500 }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(from);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// 🔹 MAIN COMPONENT
export default function CompanyInfo() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  const stats = [
    { label: t("companyInfo.exportCountries"), value: 6, suffix: "+" },
    { label: t("companyInfo.squareMeters"), value: 2800 },
    { label: t("companyInfo.itemsExport"), value: 25, suffix: "+ mln" },
  ];

  return (
    <motion.section
      id="company-info"
      className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 transition-opacity duration-700 ease-in-out"
      style={{ opacity: loaded ? 1 : 0 }}
    >
      {/* LEFT SIDE — IMAGE */}
      <motion.div
        className="w-full lg:w-1/2 relative overflow-hidden rounded-xl"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[pulse_1.2s_ease-in-out_infinite] blur-md" />
        )}

        <motion.img
          src={aboutImg}
          alt="Simex Team"
          onLoad={() => setLoaded(true)}
          className="relative w-full h-full shadow-xl hover:shadow-2xl object-cover border border-gray-200 rounded-xl scale-[1.02] hover:scale-[1.04] transition-all duration-700 ease-out"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 250, damping: 18 },
          }}
        />
      </motion.div>

      {/* RIGHT SIDE — TEXT & COUNTERS */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900">
          {t("companyInfo.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            {t("companyInfo.titleHighlight")}
          </span>
        </h2>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-600">
          {t("companyInfo.subtitle")}
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed">
          {t("companyInfo.paragraph1")}
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          {t("companyInfo.paragraph2")}
        </p>

        {/* STATISTICS */}
        <div className="flex justify-center lg:justify-start gap-10 mt-10 flex-wrap">
          {stats.map(({ label, value, suffix }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-sky-500 text-3xl font-bold">
                <Counter to={value} duration={1500} /> {suffix}
              </p>
              <p className="text-gray-600 text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
