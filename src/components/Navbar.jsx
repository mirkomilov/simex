import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle =
    "text-[#0ea5e9] font-semibold border-b-2 border-[#0ea5e9] transition-all duration-300";
  const normalStyle =
    "text-gray-700 hover:text-[#0ea5e9] transition-all duration-300";

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide text-[#0ea5e9] hover:text-[#0284c7] transition-all duration-300 cursor-pointer">
        <Link
          to="/home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SIMEX PROGRESS
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-[17px]">
        <NavLink
          to="/home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Products
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Contacts
        </NavLink>
      </div>

      {/* Language Selector */}
      <div className="hidden md:block">
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 cursor-pointer">
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-[#0ea5e9] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 text-lg md:hidden transition-all duration-300">
          <NavLink
            to="/home"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Products
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Contacts
          </NavLink>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 cursor-pointer">
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      )}
    </nav>
  );
}
