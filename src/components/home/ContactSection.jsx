import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "../../assets/home-images/contact.jpg";
import AlertMessage from "../../components/AlertMessage"; // ✅ AlertMessage import

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" }); // ✅ alert state

  // 🔹 EmailJS form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setAlert({
            type: "success",
            message: t("contactFormSection.success"),
          });
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setAlert({ type: "", message: "" }), 4000);
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setAlert({ type: "error", message: t("contactFormSection.error") });
          setLoading(false);
          setTimeout(() => setAlert({ type: "", message: "" }), 4000);
        }
      );
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#f9fafb] py-16 md:py-24 px-6 sm:px-12 lg:px-20 xl:px-28">
      {/* ✅ AlertMessage */}
      <AlertMessage
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ type: "", message: "" })}
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="uppercase text-sky-500 tracking-widest font-semibold mb-4">
          {t("contact.subtitle")}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-gray-900">
          {t("contact.titlePrefix")}{" "}
          <motion.span
            className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {t("contact.titleHighlight")}
          </motion.span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mx-auto max-w-md">
          {t("contact.description")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-center gap-10 lg:gap-16">
        {/* LEFT — IMAGE */}
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

        {/* RIGHT — FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5 bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-sky-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-[500px] mx-auto md:mx-0"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.nameLabel")}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                required
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {t("contact.phoneLabel")}
            </label>
            <input
              type="number"
              name="phone"
              placeholder={t("contact.phonePlaceholder")}
              className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {t("contact.messageLabel")}
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder={t("contact.messagePlaceholder")}
              required
              className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-500 bg-white text-gray-900 placeholder-gray-400 transition resize-none hover:border-sky-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-sky-300 hover:scale-105 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:opacity-70"
          >
            {loading ? t("contact.sendingButton") : t("contact.sendButton")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
