"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [navbarLight, setNavbarLight] = useState(true);

  // Animación Sección1
  useEffect(() => {
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  // Dark mode y navbarLight
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      setNavbarLight(false);
    } else {
      document.documentElement.classList.remove("dark");
      setNavbarLight(true);
    }
  }, [darkMode]);

  // Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      lerp: 0.1,
      smoothWheel: true,
    });
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => {
      lenis.destroy();
    };
  }, []);
  
  

  return (
    <main className="transition-colors duration-500 bg-white dark:bg-gray-900">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-500 ${
          navbarLight ? "bg-white" : "bg-gray-800"
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
            <span
              className={`ml-4 text-sm font-bold transition-colors duration-500 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              La esencia está en los recuerdos
            </span>
          </div>

          {/* Enlaces y botón dark mode */}
          <div className="flex items-center gap-4">
            <a
              href="#seccion1"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Sección1
            </a>
            <a
              href="#seccion2"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Sección2
            </a>
            <a
              href="#seccion3"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Sección3
            </a>

            <Button
              variant="default"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Sección 1 */}
      <section
        id="seccion1"
        ref={section1Ref}
        className="h-screen flex items-center justify-center bg-cover bg-center px-4 pt-16 transition-colors duration-500"
        style={{ backgroundImage: "url('/portada.jpg')" }}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold text-center drop-shadow-lg transition-colors duration-500 ${
            navbarLight ? "text-white" : "text-black"
          }`}
        >
          No se pierde la memoria, <br />perdemos a la persona
        </h1>
      </section>

      {/* Sección 2 */}
      <section
        id="seccion2"
        className="h-screen flex items-center justify-center bg-orange-200 dark:bg-orange-900 px-4 pt-16 transition-colors duration-500"
      >
        <h1
          className={`text-4xl font-bold transition-colors duration-500 ${
            navbarLight ? "text-white" : "text-black"
          }`}
        >
          Sección 2
        </h1>
      </section>

      {/* Sección 3 */}
      <section
        id="seccion3"
        className="h-screen flex items-center justify-center bg-yellow-200 dark:bg-yellow-800 px-4 pt-16 transition-colors duration-500"
      >
        <h1
          className={`text-4xl font-bold transition-colors duration-500 ${
            navbarLight ? "text-white" : "text-black"
          }`}
        >
          Sección 3
        </h1>
      </section>
    </main>
  );
}
