import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ tarjima qo‘shildi
import qualityImg from "../../assets/home-images/quality.jpg";

const Counter = ({ from = 0, to, duration = 2000 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
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
    if (window.innerWidth < 768) {
      setCount(to); // Immediately show final count on mobile
      return;
    }
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

export default function QualitySection() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅

  return (
    <motion.section
      id="quality"
      className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Text Content */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          {t("quality.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            {t("quality.titleHighlight")}
          </span>
        </h2>

        <p className="text-gray-600 mb-6">
          {t("quality.description")}
        </p>
        <button
          onClick={() => {
            navigate("/about#production");
            setTimeout(() => {
              const section = document.getElementById("production");
              if (section) {
                window.scrollTo({
                  top: section.offsetTop - 70,
                  behavior: "smooth",
                });
              }
            }, 300);
          }}
          className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 text-base md:text-lg"
        >
          {t("quality.button")} →
        </button>

        {/* Counters */}
        <div className="flex justify-center lg:justify-start gap-12 mt-8">
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={1000000} duration={1500} />
            </p>
            <p className="text-gray-600 text-sm">{t("quality.counter1")}</p>
          </div>
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={150} duration={1500} />
            </p>
            <p className="text-gray-600 text-sm">{t("quality.counter2")}</p>
          </div>
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={200} duration={1500} />
            </p>
            <p className="text-gray-600 text-sm">{t("quality.counter3")}</p>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.img
        src={qualityImg}
        alt="Quality"
        className="w-full lg:w-1/2 shadow-xl hover:shadow-2xl transition-shadow duration-500 object-cover order-1 lg:order-2 border border-gray-200 rounded-md"
        variants={{
          hidden: { opacity: 0, x: 80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
        whileHover={{
          y: -6,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      />
    </motion.section>
  );
}
