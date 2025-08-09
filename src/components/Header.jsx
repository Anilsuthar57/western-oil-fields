import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => setIsOpen(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      sub: [
        { name: "01. Drilling Services", path: "/services/workover-rigs" },
        { name: "02. Rig Maintenance", path: "/services/maintenance" },
        { name: "03. Field Operations", path: "/services/winch" },
        { name: "04. Logistics & Supply", path: "/services/tankers" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "QHSE", path: "/qhse" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-black fixed top-0 w-full z-50 shadow-lg">
      <nav className="flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-white text-2xl font-bold italic">WESTERN</h1>
            <p className="text-sm font-semibold text-orange-400 italic tracking-wide">
              Oil Field Services
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 text-white font-medium text-base items-center">
          {links.map((link, index) =>
            link.path ? (
              <Link
                key={index}
                to={link.path}
                className={`hover:text-orange-400 transition ${
                  isActive(link.path) ? "text-orange-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <div
                key={index}
                className="relative cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span
                  className={`hover:text-orange-400 ${
                    isActive("/services") ? "text-orange-400" : ""
                  }`}
                >
                  {link.name}
                </span>

                {/* Submenu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg py-2 w-64 z-50">
                    {link.sub.map((sublink, i) => (
                      <Link
                        key={i}
                        to={sublink.path}
                        onClick={handleClose}
                        className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                          isActive(sublink.path) ? "text-orange-400" : ""
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#002145] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-start p-6">
          <div className="space-y-6 text-lg font-semibold">
            {links.map((link, index) => (
              <div key={index}>
                {link.path ? (
                  <Link
                    to={link.path}
                    onClick={handleClose}
                    className={`block border-l-4 pl-3 ${
                      isActive(link.path)
                        ? "border-orange-400 text-white"
                        : "border-transparent hover:border-orange-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <div className="text-white">{link.name}</div>
                    <div className="pl-5 space-y-2 text-sm text-white/90">
                      {link.sub.map((sublink, i) => (
                        <Link
                          key={i}
                          to={sublink.path}
                          onClick={handleClose}
                          className={`block ${
                            isActive(sublink.path)
                              ? "text-orange-400"
                              : "hover:text-orange-300"
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button onClick={handleClose} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
