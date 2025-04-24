import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "TIMETABLE", path: "/timetable" },
    { name: "TRAINERS", path: "/trainers" },
    { name: "PRICING", path: "/pricing" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
          <div className="bg-black-600 p-2 rounded-full">
            <img src="./src/assets/logo.png" alt="Logo" className="w-9 h-9" />
          </div>
            <div>
              <span className="text-white text-2xl font-extrabold uppercase">Fit Fusion</span>
              <p className="text-sm text-gray-400">Fitness for All</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all ${
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <Link
              to="/buy"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              BUY NOW
            </Link>
            <Link to="/login" className="text-white hover:text-red-600 text-lg px-5">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-black/90 py-4 space-y-4">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all ${
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <Link
              to="/buy"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              BUY NOW
            </Link>
            <Link to="/login" className="text-white hover:text-red-600 text-lg">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
