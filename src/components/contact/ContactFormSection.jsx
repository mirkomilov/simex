import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Location from "../../components/contact/Location";
import AlertMessage from "../../components/AlertMessage";

const ContactFormSection = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [alert, setAlert] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setAlert({ type: "success", message: t("contactFormSection.success") });
          e.target.reset();
          setTimeout(() => setAlert({ type: "", message: "" }), 4000); // 4 sekunddan keyin yo‘qoladi
        },
        () => {
          setAlert({ type: "error", message: t("contactFormSection.error") });
          setTimeout(() => setAlert({ type: "", message: "" }), 4000);
        }
      );
  };

  return (
    <section className="bg-[#f4f6fa] pb-20 px-6 md:px-12 lg:px-24 relative">
      {/* ✅ Notification */}
      <AlertMessage
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ type: "", message: "" })}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE — CONTACT FORM */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md flex flex-col justify-center h-full min-h-[500px]">
          <h4 className="text-sky-600 uppercase font-semibold tracking-widest mb-2">
            {t("contactFormSection.subtitle")}
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            {t("contactFormSection.title")}
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                  {t("contactFormSection.fields.name")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contactFormSection.placeholders.name")}
                  required
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                  {t("contactFormSection.fields.email")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contactFormSection.placeholders.email")}
                  required
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                {t("contactFormSection.fields.phone")}
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder={t("contactFormSection.placeholders.phone")}
                className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                {t("contactFormSection.fields.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder={t("contactFormSection.placeholders.message")}
                required
                className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 resize-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-sky-600 font-semibold hover:text-sky-700 underline underline-offset-4 transition"
            >
              {t("contactFormSection.button")}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — MAP / LOCATION */}
        <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[500px] flex">
          <Location />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
