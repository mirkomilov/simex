import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductionTabs from "../components/about/ProductionTabs";
import WorkProcessSection from "../components/about/WorkProcess";
import { Map } from "../components/map/map";
import aboutBg from "../assets/about.jpg"; // hero uchun fon rasmi (mannequin yoki sewing machine rasmi)
import teamImg from "../assets/about3.avif"; // asosiy tasvir, istalgan professional rasm bilan almashtir

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

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

const cards = [
  {
    title: "Our Mission",
    description:
      "Contribute to bring to life the bright works of designers, using our experience, expertise and power. To make fashionable and high-quality clothing affordable.",
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as one of the leading garment manufacturers in Central Asia, trusted globally for quality and reliability.",
  },
  {
    title: "Our Values",
    description:
      "Integrity, quality, teamwork, and continuous improvement are at the heart of everything we do.",
  },
  {
    title: "Our Goals",
    description:
      "To expand our global presence, strengthen partnerships, and deliver value through innovation and speed.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-start px-10 md:px-24"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-left z-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 tracking-widest drop-shadow-md">
            SIMEX PROGRESS
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-tight">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
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
              {[
                { label: "Export countries", value: 6, suffix: "+" },
                { label: "Square meters", value: 2800 },
                { label: "Items of export", value: 25, suffix: "+ mln" },
              ].map(({ label, value, suffix }, i) => (
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
                    className="text-3xl md:text-4xl font-bold text-green-600"
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
              Who We{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Are
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600">
              SIMEX PROGRESS – CLOTHING OF THE FUTURE
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Simex Progress has been supplying high quality products to many
              major clothing brands since 2008. To date, the company has managed
              to export more than 25 million products to the CIS countries and
              Eastern Europe. Services include the supply chain from fabric to
              finished products.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              The company's team consists of quality management (TQM)
              professionals and is constantly improving its processes using
              methods such as “Kaizen” and “Lean management”.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
            What{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We combine expertise, innovation, and teamwork to achieve
            sustainable growth and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ title, description }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-transform hover:-translate-y-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Production Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-green-500 hidden sm:block"></span>
            PRODUCTION
            <span className="w-12 h-[2px] bg-green-500 hidden sm:block"></span>
          </h2>
        </div>
        <ProductionTabs />
      </section>

      {/* Work Process Section */}
      <WorkProcessSection />
      <Map />
    </>
  );
};

export default About;
