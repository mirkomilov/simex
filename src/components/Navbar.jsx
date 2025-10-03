import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = "text-green-600 font-bold border-b-2 border-green-600";
  const normalStyle = "text-gray-700 hover:text-green-500";

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-green-600 tracking-wide">
        <Link to="/home">SIMEX PROGRESS</Link>
      </div>

      {/* Links */}
      <div className="flex gap-8 text-lg">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Products
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Contacts
        </NavLink>
      </div>

      {/* Language Selector */}
      <div>
        <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </nav>
  );
}
