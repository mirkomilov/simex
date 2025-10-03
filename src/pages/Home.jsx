import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";
import qualityImg from "../assets/quality.jpg";

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
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    } else {
      setCount(from); // reset when out of view so it replays
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.25,
      ease: "easeOut",
    },
  }),
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
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

const stats = [
  { label: "Pcs per month", value: 1000000 },
  { label: "Sewing machines", value: 150 },
  { label: "Staff", value: 200 },
];

const Home = () => {
  return (
    <>
      <section
        className="relative h-screen max-h-[100vh] w-full bg-cover bg-center bg-fixed flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
        <div className="relative flex flex-col md:flex-row justify-between items-center h-full justify-center">
          <div className="max-w-2xl text-left sm:text-center md:text-left px-8 md:px-16 z-10 space-y-6 flex flex-col items-start">
            <p className="text-green-400 uppercase tracking-[0.25em] text-sm md:text-base font-semibold mb-4">
              Production Platform
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight md:leading-snug text-white drop-shadow-lg tracking-wide">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                SIMEX PROGRESS
              </span>
              <br />
              Quality and Production on Time
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow mb-6 max-w-xl">
              Simex Progress has been supplying quality products to many major
              clothing brands since 2008. Our services cover the full supply
              chain from knitting fabric to finished garments and knitwear.
            </p>

            <a
              href="#"
              className="relative inline-flex items-center bg-gradient-to-r from-green-500 to-green-700 text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-green-600 hover:to-green-800 text-sm sm:text-base lg:text-lg"
            >
              More <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900">
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
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl shadow-md p-4 sm:p-6 cursor-pointer transform-gpu will-change-transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i}
            >
              <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-green-600">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={qualityImg}
              alt="Quality"
              className="w-full rounded-xl border border-gray-200 shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Quality You{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Can Trust
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              We are committed to maintaining the highest standards in every
              aspect of our production process to ensure the best results for
              our clients.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-700 text-white font-medium px-6 py-3 rounded-full shadow-md hover:from-green-600 hover:to-green-800 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              More <span className="ml-2">→</span>
            </a>
            <div className="flex justify-around sm:justify-between mt-6 sm:mt-8">
              {stats.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-center justify-center"
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i}
                >
                  <motion.span
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Counter to={value} duration={1500} />
                  </motion.span>
                  <span className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
