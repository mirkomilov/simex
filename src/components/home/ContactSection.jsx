import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ tarjima qo‘shildi
import contactImg from "../../assets/home-images/contact.jpg";

function Contact() {
  const { t } = useTranslation(); // ✅ i18n hook

  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-[#f9fafb] py-16 md:py-24 px-6 sm:px-12 lg:px-20 xl:px-28">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="uppercase text-sky-500 tracking-widest font-semibold mb-4">
          {t("contact.subtitle")}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-gray-900">
          {t("contact.titlePrefix")}{" "}
          <motion.span
            className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {t("contact.titleHighlight")}
          </motion.span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mx-auto max-w-md">
          {t("contact.description")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-center gap-10 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.025] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-[520px] mx-auto md:mx-0"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-[300px] md:h-[340px] lg:h-[360px] object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5 bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-sky-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-[500px] mx-auto md:mx-0"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.nameLabel")}
              </label>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.phoneLabel")}
              </label>
              <input
                type="text"
                placeholder={t("contact.phonePlaceholder")}
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.companyLabel")}
              </label>
              <input
                type="text"
                placeholder={t("contact.companyPlaceholder")}
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {t("contact.messageLabel")}
            </label>
            <textarea
              rows="4"
              placeholder={t("contact.messagePlaceholder")}
              className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition resize-none hover:border-sky-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-sky-300 hover:scale-105 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            {t("contact.sendButton")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
