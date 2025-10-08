import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "../assets/instagram.svg";
import TelegramIcon from "../assets/telegram.svg";
import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer
      className="relative text-gray-200 border-t border-emerald-700/20 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 40, 0, 0.8), rgba(0, 60, 0, 0.85)), url('/src/assets/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 py-16 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-[1fr_0.8fr_1fr] gap-10 items-start justify-between md:text-left text-center">
        {/* 1️⃣ About Section */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            SIMEX PROGRESS
          </h3>
          <p className="text-[15px] text-gray-300 leading-relaxed">
            Leader in the production of stylish clothes in Uzbekistan.
          </p>
          <a
            href="/documents"
            className="text-emerald-400 text-[15px] mt-3 inline-block hover:text-emerald-300 transition-all"
          >
            View company documentation →
          </a>
        </div>

        {/* 2️⃣ Company Section */}
        <div className="flex flex-col justify-start space-y-4 md:pl-8">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
            Company
          </h3>
          <ul className="space-y-2 text-[15px] text-gray-200">
            <li>
              <Link
                to="/home"
                className="hover:text-emerald-300 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-emerald-300 transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-emerald-300 transition-all"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-emerald-300 transition-all"
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
          <p className="text-[15px] text-gray-200 leading-relaxed">
            +998 90 955 55 70
          </p>

          {/* 🔗 Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-3 mb-3">
            {[
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
                  className="w-7 h-7 opacity-90 invert brightness-200 transition-transform duration-500 ease-out hover:brightness-150 hover:scale-125"
                />
              </a>
            ))}
          </div>

          <p className="text-[15px] text-gray-300 leading-relaxed">
            Tashkent city, Sergeli district, Kumaryk-3, building 88
          </p>
        </div>
      </div>

      {/* 🔹 Line divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mt-8"></div>
    </footer>
  );
}

export default Footer;
