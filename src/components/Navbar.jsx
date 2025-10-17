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

  // Auto scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle =
    "text-[#0ea5e9] font-semibold border-b-2 border-[#0ea5e9] transition-all duration-300";
  const normalStyle =
    "text-gray-700 hover:text-[#0ea5e9] transition-all duration-300";

  // Language Switcher
  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <motion.nav
      className={`flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 ${
        scrolled ? "backdrop-blur-sm shadow-md" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 75, damping: 18 }}
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

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-10 text-[17px]">
        {["home", "about", "products", "contacts"].map((link) => (
          <NavLink
            key={link}
            to={`/${link}`}
            onClick={() => {
              if (pathname === `/${link}`)
                window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            {t(link)}
          </NavLink>
        ))}
      </div>

      {/* LANGUAGE SELECT (DESKTOP) */}
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
        className="md:hidden text-3xl text-[#0ea5e9] focus:outline-none transition-transform duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menuWrapper"
            className="fixed inset-0 z-[998] flex items-start justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setMenuOpen(false)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

            {/* Menu Panel */}
            <motion.div
              key="menuPanel"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative mt-10 w-[90%] max-w-sm bg-white z-[999] flex flex-col items-center gap-6 py-8 shadow-xl rounded-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-6 text-2xl text-[#0ea5e9] hover:text-[#0284c7] transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              {/* NAV LINKS */}
              {["home", "about", "products", "contacts"].map((link) => (
                <NavLink
                  key={link}
                  to={`/${link}`}
                  onClick={() => {
                    if (pathname === `/${link}`)
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  {t(link)}
                </NavLink>
              ))}

              {/* LANGUAGE SELECT */}
              <select
                onChange={(e) => {
                  changeLanguage(e);
                  setMenuOpen(false);
                }}
                defaultValue={i18n.language}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 cursor-pointer"
              >
                <option value="en">EN 🇬🇧</option>
                <option value="uz">UZ 🇺🇿</option>
                <option value="ru">RU 🇷🇺</option>
              </select>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
