import React from "react";
import { Link } from "react-router-dom";
import WhatsappIcon from "../assets/footer-images/whatsapp.svg";
import InstagramIcon from "../assets/footer-images/instagram.svg";
import TelegramIcon from "../assets/footer-images/telegram.svg";
import FacebookIcon from "../assets/footer-images/facebook.svg";
import LinkedinIcon from "../assets/footer-images/linkedin.svg";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative text-gray-200 border-t border-sky-700/20 transition-colors duration-300 bg-cover bg-center bg-no-repeat backdrop-blur-sm shadow-inner shadow-sky-900/40"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(12, 70, 150, 0.98) 0%, rgba(5, 35, 90, 0.98) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 py-16 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-[1fr_0.8fr_1fr] gap-10 items-start justify-between md:text-left text-center">
        {/* 1️⃣ About Section */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            <Link
              to="/home"
              onClick={scrollToTop}
              className="hover:text-sky-300 transition-colors duration-300"
            >
              SIMEX PROGRESS
            </Link>
          </h3>
          <p className="text-[14.5px] text-gray-200 leading-relaxed">
            Leader in the production of stylish clothes in Uzbekistan.
          </p>
          <a
            href="/docs/test.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 text-[14.5px] mt-3 inline-block hover:text-sky-300 transition-colors duration-300"
          >
            View company documentation →
          </a>
        </div>

        {/* 2️⃣ Company Section */}
        <div className="flex flex-col justify-start space-y-4 md:pl-8">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
            Company
          </h3>
          <ul className="space-y-2 text-[14.5px] text-gray-200">
            <li>
              <Link
                to="/home"
                className="hover:text-sky-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-sky-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-sky-300 transition-colors duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-sky-300 transition-colors duration-300"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Section */}
        <div className="flex flex-col justify-start space-y-4 md:pl-6">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
            Contact us
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
                  className="w-7 h-7 opacity-90 filter invert brightness-200 transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </a>
            ))}
          </div>

          <p className="text-[14.5px] text-gray-200 leading-relaxed">
            Tashkent city, Sergeli district, Kumaryk-3, building 88
          </p>
        </div>
      </div>

      {/* 🔹 Line divider */}
      <div className="h-[1px] bg-gradient-to-r from-sky-400/50 via-sky-300/40 to-sky-400/50 blur-[1px] mt-10"></div>
    </footer>
  );
}

export default Footer;
