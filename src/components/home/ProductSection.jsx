import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import woman1 from "../../assets/home-images/woman1.jpg";
import woman2 from "../../assets/home-images/woman2.jpg";
import woman3 from "../../assets/home-images/woman3.jpg";
import man1 from "../../assets/home-images/man1.jpg";
import man2 from "../../assets/home-images/man2.jpg";
import man3 from "../../assets/home-images/man3.jpg";
import child1 from "../../assets/home-images/child1.jpg";
import child2 from "../../assets/home-images/child2.jpg";
import child3 from "../../assets/home-images/child3.jpg";

function Production() {
  const products = [
    { image: woman1, title: "Women's clothing" },
    { image: woman2, title: "Women's clothing" },
    { image: woman3, title: "Women's clothing" },
    { image: man1, title: "Men's clothing" },
    { image: man2, title: "Men's clothing" },
    { image: man3, title: "Men's clothing" },
    { image: child1, title: "Children's clothing" },
    { image: child2, title: "Children's clothing" },
    { image: child3, title: "Children's clothing" },
  ];

  const groups = [
    {
      title: "Women's clothing",
      items: products
        .filter((p) => p.title === "Women's clothing")
        .map((i) => i.image),
    },
    {
      title: "Men's clothing",
      items: products
        .filter((p) => p.title === "Men's clothing")
        .map((i) => i.image),
    },
    {
      title: "Children's clothing",
      items: products
        .filter((p) => p.title === "Children's clothing")
        .map((i) => i.image),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 text-center mb-0 overflow-hidden">
      {/* Heading section */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-sky-500 uppercase tracking-widest mb-2">
          Our Production
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Eco{" "}
          <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 bg-clip-text text-transparent">
            Friendly Product
          </span>
        </h2>
      </motion.div>

      {/* Swiper section */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="py-10"
        >
          <style>{`
            :root {
              --swiper-navigation-color: #0ea5e9 !important;
              --swiper-navigation-size: 20px;
            }
            .swiper-button-prev, .swiper-button-next {
              background: none !important;
              width: 38px !important;
              height: 38px !important;
              position: absolute !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              z-index: 50 !important;
              transition: all 0.3s ease-in-out !important;
            }
            .swiper-button-prev::after, .swiper-button-next::after {
              color: #0ea5e9 !important;
              font-size: 20px !important;
              font-weight: bold !important;
              transition: color 0.3s ease !important;
            }
            .swiper-button-prev:hover::after,
            .swiper-button-next:hover::after {
              color: #0284c7 !important;
            }
            @media (max-width: 768px) {
              .swiper-button-prev, .swiper-button-next {
                width: 32px !important;
                height: 32px !important;
              }
            }
          `}</style>

          {groups.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid md:grid-cols-3 gap-6">
                {group.items.map((image, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={group.title}
                      loading="lazy"
                      className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-xl transition duration-700 ease-in-out hover:brightness-110"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Title + link */}
              <div className="mt-1 md:mt-2 text-center">
                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-1">
                  {group.title}
                </h3>
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-600 font-normal text-sm transition"
                >
                  More →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Production;
