import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ qo‘shildi
import teamImg from "../../assets/about3.avif";

export default function CompanyInfo() {
  const { t } = useTranslation(); // ✅ i18next
  const Counter = ({ from = 0, to, duration = 1500 }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
      if (isInView) {
        let start = null;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = Math.floor(progress * (to - from) + from);
          setCount(current >= to ? to : current);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      } else {
        setCount(from);
      }
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
  };

  const stats = [
    { label: t("companyInfo.exportCountries"), value: 6, suffix: "+" },
    { label: t("companyInfo.squareMeters"), value: 2800 },
    { label: t("companyInfo.itemsExport"), value: 25, suffix: "+ mln" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Chap tomonda rasm + statistika */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-4 md:mt-6"
        >
          <img
            src={teamImg}
            alt="Simex Team"
            className="rounded-xl shadow-lg border border-gray-200 object-cover hover:scale-105 transition-transform duration-500 w-full max-w-md h-[420px] md:h-[460px]"
          />

          {/* Statistikalar */}
          <div className="flex justify-center gap-8 mt-8 w-full">
            {stats.map(({ label, value, suffix }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <motion.span
                  className="text-3xl md:text-4xl font-bold text-sky-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Counter to={value} duration={1500} /> {suffix}
                </motion.span>
                <span className="text-gray-700 text-sm md:text-base mt-1 text-center">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* O‘ng tomonda matn */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-left flex flex-col justify-center max-w-xl pt-2"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("companyInfo.titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              {t("companyInfo.titleHighlight")}
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-600">
            {t("companyInfo.subtitle")}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t("companyInfo.paragraph1")}
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t("companyInfo.paragraph2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
