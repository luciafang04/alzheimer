"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Icono + frase */}
        <div className="flex items-center">
          <Image
            src="/icon.png"
            alt="Alzheimer Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="ml-4 text-sm font-bold text-gray-700">
            La esencia está en los recuerdos
          </span>
        </div>

        {/* Enlaces a secciones + botón dark mode */}
        <div className="flex items-center gap-4">
          <a
            href="#seccion1"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Provisional
          </a>
          <a
            href="#seccion2"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Provisional
          </a>
          <a
            href="#seccion3"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Provisional
          </a>

          <Button variant="default" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </Button>
        </div>
      </div>
    </nav>
  );
}
