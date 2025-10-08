import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";
import qualityImg from "../assets/quality.jpg";
import Production from "../components/Production";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Counter = ({ from = 0, to, duration = 2000 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      setCount(from);
      controls.stop();
    }
  }, [isInView, controls, from]);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    if (isInView) {
      requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

function Home() {
  const navigate = useNavigate();

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

  // Animation variants for staggered fade-up and slide-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  // Light reflection animation for main heading
  const reflectionVariants = {
    animate: {
      backgroundPosition: ["-200% 0%", "200% 0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Unified fade-up + slide-in animation for feature cards
  const featuresContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // New variants for quality section container and children
  const qualityContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const qualityItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageFadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-start bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-4xl px-6 md:px-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.p
            className="text-green-400 tracking-widest uppercase text-base md:text-lg mb-4 font-semibold"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            Production Platform
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 relative overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            SIMEX PROGRESS
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            Quality and Production on Time
          </motion.h2>
          <motion.p
            className="text-white text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            Simex Progress has been supplying quality products to many major
            clothing brands since 2008. Our services cover the full supply chain
            from knitting fabric to finished garments and knitwear.
          </motion.p>
          <motion.button
            onClick={() => navigate("/about")}
            className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            More →
          </motion.button>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 rounded-2xl shadow-sm"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={featuresContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {features.map(({ title, description }) => (
            <motion.div
              key={title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
              variants={featureItemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* QUALITY SECTION */}
      <motion.section
        id="quality"
        className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={qualityContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.div
          className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          variants={qualityItemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Quality You{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Can Trust
            </span>
          </h2>
          <p className="text-gray-600 mb-6">
            We are committed to maintaining the highest standards in every
            aspect of our production process to ensure the best results for our
            clients.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 text-base md:text-lg"
          >
            More →
          </a>
          <div className="flex justify-center lg:justify-start gap-12 mt-8">
            <div className="text-center">
              <p className="text-green-600 text-3xl font-bold">
                <Counter to={1000000} duration={1500} />
              </p>
              <p className="text-gray-600 text-sm">Pcs per month</p>
            </div>
            <div className="text-center">
              <p className="text-green-600 text-3xl font-bold">
                <Counter to={150} duration={1500} />
              </p>
              <p className="text-gray-600 text-sm">Sewing machines</p>
            </div>
            <div className="text-center">
              <p className="text-green-600 text-3xl font-bold">
                <Counter to={200} duration={1500} />
              </p>
              <p className="text-gray-600 text-sm">Staff</p>
            </div>
          </div>
        </motion.div>

        <motion.img
          src={qualityImg}
          alt="Quality"
          className="w-full lg:w-1/2 shadow-lg object-cover order-1 lg:order-2 border border-gray-200"
          variants={imageFadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        />
      </motion.section>

      {/* PRODUCTION SECTION */}
      <Production />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
