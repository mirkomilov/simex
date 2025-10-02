import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = "text-blue-500 font-bold"; // active bo'lganda ko'rinishi
  const normalStyle = "text-gray-700 hover:text-blue-400";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link to="/home">SIMEX</Link>
      </div>

      {/* Links */}
      <div className="flex gap-6">
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
    </nav>
  );
}
