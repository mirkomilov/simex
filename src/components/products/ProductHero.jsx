import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductHero() {
  return (
    <>
      {/* Hero background */}
      <section
        className="relative w-full h-[55vh] flex flex-col justify-start items-start text-left overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/products-images/bg-fabric.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        {/* Hero title */}
        <div className="relative z-10 px-6 md:px-16 pt-36 md:pt-40">
          <motion.p
            variants={itemVariants}
            className="text-sky-500 tracking-widest uppercase text-base md:text-lg mb-4 font-semibold"
          >
            Simex
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] tracking-tight"
          >
            Product
          </motion.h1>
        </div>
      </section>

      {/* Description below the hero */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 text-center py-16 px-6 md:px-24">
        <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-700 hover:text-sky-600">
          Simex Progress offers tailoring of ready-made knitwear. The range
          includes men’s, women’s and children’s products. Simex Progress uses
          the following fabrics in the production of clothing: single jersey,
          footer, ribana, interlock, pique, velour, etc.
        </p>
      </section>
    </>
  );
}
