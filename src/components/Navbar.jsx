import React, { useState, useEffect } from "react";
import { navLinks } from "../constants/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enlaces escritorio */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-[#484848] hover:text-[#A938BC] transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Botones escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="px-6 py-2 rounded-lg font-medium text-white bg-[#484848] hover:bg-[#A938BC] transition-colors">
              Login
            </button>

            <a
              href="#"
              className="font-medium text-[#484848] hover:text-[#A938BC] transition-colors"
            >
              Sign up
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#484848] hover:text-[#A938BC] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil animado */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white z-[60] overflow-hidden transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 h-[calc(100vh-4rem)]"
            : "opacity-0 -translate-y-4 h-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Enlaces */}
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#484848] hover:text-[#A938BC] transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Botones */}
          <div className="flex flex-col items-center mt-8 space-y-4 w-2/3">
            <button className="w-full px-6 py-3 rounded-lg font-medium text-white bg-[#484848] hover:bg-[#A938BC] transition-colors">
              Login
            </button>

            <a
              href="#"
              className="font-medium text-[#484848] hover:text-[#A938BC] transition-colors text-lg"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
