import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/about3.avif";

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
      setCount(to);
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

export default function CompanyInfo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.section
      id="company-info"
      className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 transition-opacity duration-700 ease-in-out"
      style={{ opacity: loaded ? 1 : 0 }}
      initial={false}
    >
      {/* LEFT SIDE — IMAGE */}
      <motion.div
        className="w-full lg:w-1/2 order-1 lg:order-1 relative overflow-hidden rounded-xl"
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        {/* Shimmer placeholder */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[pulse_1.2s_ease-in-out_infinite] blur-md" />
        )}

        <motion.img
          src={aboutImg}
          alt="Simex Team"
          onLoad={() => setLoaded(true)}
          className="relative w-full h-full shadow-xl hover:shadow-2xl object-cover border border-gray-200 rounded-xl scale-[1.02] hover:scale-[1.04] transition-all duration-700 ease-out"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 250, damping: 18 },
          }}
        />
      </motion.div>

      {/* RIGHT SIDE — TEXT */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left order-2 lg:order-2 space-y-6"
        variants={{
          hidden: { opacity: 0, x: 80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900">
          Who We{" "}
          <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            Are
          </span>
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-600">
          SIMEX PROGRESS – CLOTHING OF THE FUTURE
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed">
          Simex Progress has been supplying high quality products to many major
          clothing brands since 2008. To date, the company has managed to export
          more than 25 million products to the CIS countries and Eastern Europe.
          Services include the supply chain from fabric to finished products.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          The company's team consists of quality management (TQM) professionals
          and is constantly improving its processes using methods such as
          “Kaizen” and “Lean management”.
        </p>

        {/* COUNTERS */}
        <div className="flex justify-center lg:justify-start gap-10 mt-10 flex-wrap">
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={6} duration={1500} /> +
            </p>
            <p className="text-gray-600 text-sm">Export countries</p>
          </div>
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={2800} duration={1500} />
            </p>
            <p className="text-gray-600 text-sm">Square meters</p>
          </div>
          <div className="text-center">
            <p className="text-sky-500 text-3xl font-bold">
              <Counter to={25} duration={1500} /> + mln
            </p>
            <p className="text-gray-600 text-sm">Items of export</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
