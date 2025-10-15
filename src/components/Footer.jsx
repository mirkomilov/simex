import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WhatsappIcon from "../assets/footer-images/whatsapp.svg";
import InstagramIcon from "../assets/footer-images/instagram.svg";
import TelegramIcon from "../assets/footer-images/telegram.svg";
import FacebookIcon from "../assets/footer-images/facebook.svg";
import LinkedinIcon from "../assets/footer-images/linkedin.svg";
import { motion } from "framer-motion";

function Footer() {
  const { t } = useTranslation();

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative text-gray-200 border-t border-sky-700/20 transition-colors duration-300 bg-cover bg-center bg-no-repeat backdrop-blur-sm shadow-inner shadow-sky-900/40"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(12, 70, 150, 0.98) 0%, rgba(5, 35, 90, 0.98) 100%)",
      }}
    >
      <div className="relative z-10 py-14 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-[1fr_0.8fr_1fr] gap-10 sm:gap-8 items-start justify-between md:text-left text-center">
        {/* 1️⃣ About Section */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            <Link
              to="/home"
              onClick={() => handleLinkClick("/home")}
              className="hover:text-sky-300 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              SIMEX PROGRESS
            </Link>
          </h3>
          <p className="text-[14.5px] text-gray-200 leading-relaxed">
            {t("footer.about.description")}
          </p>
          <a
            href="/docs/document.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 text-[14.5px] mt-3 inline-block hover:text-sky-300 transition-colors duration-300"
          >
            {t("footer.about.docLink")} →
          </a>
        </div>

        {/* 2️⃣ Company Section */}
        <div className="flex flex-col justify-start space-y-4 md:pl-8">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
            {t("footer.company.title")}
          </h3>
          <ul className="space-y-2 text-[14.5px] text-gray-200">
            <li>
              <Link
                to="/home"
                onClick={() => handleLinkClick("/home")}
                className="hover:text-sky-300 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {t("footer.company.links.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("/about")}
                className="hover:text-sky-300 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {t("footer.company.links.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => handleLinkClick("/products")}
                className="hover:text-sky-300 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {t("footer.company.links.products")}
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                onClick={() => handleLinkClick("/contacts")}
                className="hover:text-sky-300 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {t("footer.company.links.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Section */}
        <div className="flex flex-col justify-start space-y-4 md:pl-6">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
            {t("footer.contact.title")}
          </h3>
          <p className="text-[14.5px] text-gray-200 leading-relaxed">
            +998 90 955 55 70
          </p>

          {/* 🔗 Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-3 mb-3">
            {[
              {
                href: "https://wa.me/998909555570",
                src: WhatsappIcon,
                alt: "WhatsApp",
              },
              {
                href: "https://instagram.com/simex_progress",
                src: InstagramIcon,
                alt: "Instagram",
              },
              {
                href: "https://t.me/simex_progress",
                src: TelegramIcon,
                alt: "Telegram",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61581875191262",
                src: FacebookIcon,
                alt: "Facebook",
              },
              {
                href: "https://uz.linkedin.com/company/simex-progress",
                src: LinkedinIcon,
                alt: "LinkedIn",
              },
            ].map((icon, i) => (
              <a key={i} href={icon.href} target="_blank" rel="noreferrer">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-7 h-7 opacity-90 filter invert brightness-200 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </a>
            ))}
          </div>

          <p className="text-[14.5px] text-gray-200 leading-relaxed">
            {t("footer.contact.address")}
          </p>
        </div>
      </div>

      {/* 🔹 Line divider */}
      <div className="h-[1px] bg-gradient-to-r from-sky-400/50 via-sky-300/40 to-sky-400/50 blur-[1px] mt-10"></div>
    </motion.footer>
  );
}

export default Footer;
