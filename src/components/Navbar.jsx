import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle =
    "text-[#0ea5e9] font-semibold border-b-2 border-[#0ea5e9] transition-all duration-300";
  const normalStyle =
    "text-gray-700 hover:text-[#0ea5e9] transition-all duration-300";

  // 🌍 Tilni o‘zgartirish
  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <motion.nav
      className={`flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 ${
        scrolled ? "backdrop-blur-sm shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 75, damping: 20 }}
    >
      {/* LOGO */}
      <div className="text-2xl font-extrabold tracking-wide text-[#0ea5e9] hover:text-[#0284c7] transition-all duration-300 cursor-pointer">
        <Link
          to="/home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SIMEX PROGRESS
        </Link>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-10 text-[17px]">
        <NavLink
          to="/home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          {t("about")}
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          {t("products")}
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          {t("contacts")}
        </NavLink>
      </div>

      {/* 🌐 LANGUAGE SELECT (DESKTOP) */}
      <div className="hidden md:block">
        <select
          onChange={changeLanguage}
          defaultValue={i18n.language}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 cursor-pointer"
        >
          <option value="en">EN 🇬🇧</option>
          <option value="uz">UZ 🇺🇿</option>
          <option value="ru">RU 🇷🇺</option>
        </select>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-3xl text-[#0ea5e9] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 text-lg md:hidden transition-all duration-300"
          >
            <NavLink
              to="/home"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              {t("home")}
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              {t("about")}
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              {t("products")}
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              {t("contacts")}
            </NavLink>

            {/* 📱 LANGUAGE SELECT (MOBILE) */}
            <select
              onChange={(e) => {
                changeLanguage(e);
                setMenuOpen(false);
              }}
              defaultValue={i18n.language}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 cursor-pointer mt-3"
            >
              <option value="en">English</option>
              <option value="uz">Oʻzbekcha</option>
              <option value="ru">Русский</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
