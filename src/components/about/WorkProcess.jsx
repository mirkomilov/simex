// src/components/WorkProcessSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const steps = [
  {
    id: 1,
    icon: <DollarSign className="w-6 h-6" />,
    title: "Price Agreement",
    desc: "We calculate the price for each product and confirm terms of cooperation — model, price, and deadlines.",
  },
  {
    id: 2,
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Order Confirmation",
    desc: "Your order is registered and assigned to a personal manager who ensures smooth communication.",
  },
  {
    id: 3,
    icon: <Scissors className="w-6 h-6" />,
    title: "Sample Development",
    desc: "We create a sample and coordinate it with you. Only after approval, production begins.",
  },
  {
    id: 4,
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Material Procurement",
    desc: "We purchase fabrics and accessories from trusted suppliers and perform quality checks.",
  },
  {
    id: 5,
    icon: <Factory className="w-6 h-6" />,
    title: "Preparation & Production",
    desc: "We prepare the production process — cutting, assembling, and managing workflow efficiently.",
  },
  {
    id: 6,
    icon: <SearchCheck className="w-6 h-6" />,
    title: "Quality Control",
    desc: "Each batch undergoes AQL inspection and verification to eliminate any possible defects.",
  },
  {
    id: 7,
    icon: <Package className="w-6 h-6" />,
    title: "Packaging & Labeling",
    desc: "We safely pack products, label them, and prepare all supporting documentation.",
  },
  {
    id: 8,
    icon: <Truck className="w-6 h-6" />,
    title: "Shipping",
    desc: "We organize delivery and provide full tracking information and logistics documentation.",
  },
  {
    id: 9,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Order Closure",
    desc: "We confirm receipt and collect feedback to continuously improve our service.",
  },
];

const WorkProcessSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSteps = showAll ? steps : steps.slice(0, 2);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How We{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Work With Orders
          </span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          From first contact to final delivery — each step of our production
          process is transparent, efficient, and built on quality.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <AnimatePresence>
          {visibleSteps.map(({ id, icon, title, desc }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md flex-shrink-0">
                {icon}
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {id}. {title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
