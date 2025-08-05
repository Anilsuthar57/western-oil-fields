// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const NavLinks = ({ mobile = false }) => {
    const links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "QHSE", path: "/qhse" },
      { name: "Projects", path: "/projects" },
    ];

    return (
      <div className={mobile ? "flex flex-col space-y-4" : "hidden lg:flex items-center space-x-6"}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={handleClose}
            className="text-gray-800 hover:text-blue-600 font-medium capitalize transition"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={handleClose}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
        >
          Contact
        </Link>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-2xl italic font-bold text-red-600">WESTERN</h1>
              <p className="text-sm italic font-bold text-blue-500">Oil Field Services</p>
            </div>
          </div>

          {/* Desktop Links */}
          <NavLinks />

          {/* Mobile Menu Button (SVG Icons used instead) */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-linear ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="pb-4 pt-2">
            <NavLinks mobile />
          </div>
        </div>
      </nav>
    </header>
  );
}
