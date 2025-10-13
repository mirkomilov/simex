import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ tarjima qo‘shildi

export default function MissionSection() {
  const { t } = useTranslation();

  const features = t("mission.features", { returnObjects: true }); // ✅ jsondagi arrayni o‘qiydi

  const container = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.3 },
    },
  };

  return (
    <section id="features" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900">
          {t("mission.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            {t("mission.titleHighlight")}
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {t("mission.subtitle")}
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 px-4 sm:px-6 md:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {features &&
          features.map(({ title, description }, idx) => (
            <motion.div
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm transition-transform duration-500 cursor-pointer"
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(14,165,233,0.2)",
                borderColor: "#0ea5e9",
                transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
              }}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {description}
              </p>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}
