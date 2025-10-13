import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "High Quality",
      description:
        "Strict quality control ensures the best quality of our products.",
    },
    {
      title: "Beneficial Cooperation",
      description:
        "We improve processes for long-term partnerships and affordable prices.",
    },
    {
      title: "Speed",
      description:
        "80% of orders delivered ahead of schedule thanks to optimized workflow.",
    },
    {
      title: "Expertise",
      description:
        "Experience in exporting and logistics assistance from Uzbekistan.",
    },
  ];

  const container = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.45 },
    },
  };

  return (
    <section id="features" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Why{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            Choose Us
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We provide reliable quality, speed, and long-term cooperation with our
          partners worldwide.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 xl:gap-12 px-4 sm:px-6 md:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {features.map(({ title, description }) => (
          <motion.div
            key={title}
            className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-sm transition-transform duration-500 cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 12px 30px rgba(14,165,233,0.25)",
              borderColor: "#0ea5e9",
              transition: { duration: 0.35, ease: "easeOut" },
            }}
          >
            <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-sky-500 transition-colors duration-300 text-base sm:text-lg md:text-xl">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
