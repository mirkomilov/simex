import { useState } from "react";
import { motion } from "framer-motion";
import exp1 from "../../assets/production-imgs/cut1.webp";
import exp2 from "../../assets/production-imgs/cut2.jpg";
import exp3 from "../../assets/production-imgs/cut3.jpg";
import cut1 from "../../assets/production-imgs/exp2.jpg";
import cut2 from "../../assets/production-imgs/exp3.webp";
import cut3 from "../../assets/production-imgs/sew1.jpg";
import sew1 from "../../assets/production-imgs/s1.jpg";
import sew2 from "../../assets/production-imgs/s2.jpg";
import sew3 from "../../assets/production-imgs/s3.jpg";
import prod1 from "../../assets/production-imgs/cut2.jpg";
import prod2 from "../../assets/production-imgs/cut2.jpg";
import prod3 from "../../assets/production-imgs/cut2.jpg";
import { div, section } from "framer-motion/client";

const tabs = [
  {
    id: "experimental",
    label: "EXPERIMENTAL SHOP",
    images: [exp1, exp2, exp3],
  },
  {
    id: "cutting",
    label: "CUTTING SHOP",
    images: [cut1, cut2, cut3],
  },
  {
    id: "sewing",
    label: "SEWING SHOP",
    images: [sew1, sew2, sew3],
  },
  {
    id: "production",
    label: "PRODUCTION",
    images: [prod1, prod2, prod3],
  },
];

const ProductionTabs = () => {
  const [activeTab, setActiveTab] = useState("experimental");

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-4">
          <span className="w-12 h-[2px] bg-sky-500 hidden sm:block"></span>
          PRODUCTION
          <span className="w-12 h-[2px] bg-sky-500 hidden sm:block"></span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs Header */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 border-b border-gray-300 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-sky-600"
                  : "text-gray-800 hover:text-sky-500"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[3px] bg-sky-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabs
            .find((t) => t.id === activeTab)
            ?.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={`${activeTab}-${i}`}
                  className="rounded-xl shadow-md border border-gray-200 object-cover w-full h-[300px] md:h-[340px] hover:scale-[1.03] hover:shadow-xl transition-all duration-500"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionTabs;
