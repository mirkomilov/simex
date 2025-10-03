import { motion } from "framer-motion";
import version1 from "../assets/version1.jpg";

const cardVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: (i) => ({
    rotateY: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const features = [
  {
    title: "High Quality",
    description:
      "Strict quality control and high standards of operating procedures ensure the best quality of our products.",
  },
  {
    title: "Beneficial cooperation",
    description:
      "We value our work and improve processes, thanks to which we always have good quality and affordable prices.",
  },
  {
    title: "Speed",
    description:
      "About 80% of orders are delivered to customers ahead of schedule.",
  },
  {
    title: "Expertise",
    description:
      "Extensive experience in exporting from Uzbekistan and assistance to partners in the selection of suppliers of raw materials and optimal logistics services.",
  },
];

const Home = () => {
  return (
    <>
      <section
        className="relative h-screen w-full bg-cover bg-center bg-fixed animate-slow-zoom"
        style={{ backgroundImage: `url(${version1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col md:flex-row justify-between items-center h-full">
          <div className="max-w-2xl text-left sm:text-center md:text-left px-8 md:px-16 z-10 space-y-6 flex flex-col items-start">
            <p className="text-green-400 uppercase tracking-[0.25em] text-sm md:text-base font-semibold mb-4 animate-fadeIn">
              Production Platform
            </p>

            <div className="animate-fadeIn delay-200">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug text-white drop-shadow-lg tracking-wide">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  SIMEX PROGRESS
                </span>
                <br />
                Quality and Production on Time
              </h1>
            </div>

            <p className="text-xs sm:text-sm md:text-lg text-gray-200 drop-shadow mb-8 animate-fadeIn delay-500">
              Simex Progress has been supplying quality products to many major
              clothing brands since 2008. Our services cover the full supply
              chain from knitting fabric to finished garments and knitwear.
            </p>

            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-700 text-white font-medium px-6 py-2 rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:shadow-xl hover:from-green-600 hover:to-green-800 text-sm md:text-base animate-fadeIn delay-700 self-center md:self-start"
            >
              More <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Why{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We provide reliable quality, speed, and long-term cooperation with
            our partners worldwide.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
          style={{ perspective: "1000px" }}
        >
          {features.map(({ title, description }, i) => (
            <motion.div
              key={title}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl shadow-md p-4 sm:p-6 cursor-pointer transform-gpu transform transition-transform duration-500 hover:rotate-y-6 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-green-600">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
