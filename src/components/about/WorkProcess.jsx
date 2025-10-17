import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  DollarSign,
  ClipboardList,
  Scissors,
  ShoppingBag,
  Factory,
  SearchCheck,
  Package,
  Truck,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const WorkProcessSection = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Scroll fix: sahifani section tepasida ushlab turish
  useEffect(() => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showAll]);

  // Tarjima orqali bosqichlar massivini olish
  const steps = t("workProcess.steps", { returnObjects: true });
  const visibleSteps = showAll ? steps : steps.slice(0, 2);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-5 sm:px-8 md:px-12 lg:px-24 bg-gray-50 transition-all duration-500"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          {t("workProcess.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            {t("workProcess.titleHighlight")}
          </span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          {t("workProcess.subtitle")}
        </p>
      </div>

      {/* Steps list */}
      <div className="max-w-5xl mx-auto space-y-6">
        <AnimatePresence>
          {visibleSteps.map(({ id, title, desc }) => {
            const icons = {
              1: <DollarSign className="w-6 h-6" />,
              2: <ClipboardList className="w-6 h-6" />,
              3: <Scissors className="w-6 h-6" />,
              4: <ShoppingBag className="w-6 h-6" />,
              5: <Factory className="w-6 h-6" />,
              6: <SearchCheck className="w-6 h-6" />,
              7: <Package className="w-6 h-6" />,
              8: <Truck className="w-6 h-6" />,
              9: <CheckCircle className="w-6 h-6" />,
            };

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-sky-500 text-white rounded-full shadow-md flex-shrink-0">
                  {icons[id]}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {id}. {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition text-sm sm:text-base"
          >
            {showAll ? (
              <>
                {t("workProcess.showLess")} <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                {t("workProcess.showMore")} <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
