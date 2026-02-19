"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lenis from "@studio-freight/lenis";
import { quicksand } from "./layout"; 
import AlertDialogItem from "@/components/AlertDialogItem"; 

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";


import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const alzheimerData = [
  { edad: "65-69", Porcentaje: 0.8 },
  { edad: "70-74", Porcentaje: 2.0 },
  { edad: "75-79", Porcentaje: 4.9 },
  { edad: "80-84", Porcentaje: 9.9 },
  { edad: "85-89", Porcentaje: 16.2 },
  { edad: "90+", Porcentaje: 20.4 },
];

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [navbarLight, setNavbarLight] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

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

  // Navbar hide/show al hacer scroll
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${quicksand.className} fixed top-0 left-0 w-full shadow-md z-50 transition-transform duration-500 ${
          navbarLight ? "bg-white" : "bg-gray-800"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="Alzheimer Logo"
              width={30}
              height={30}
              className={`object-contain ${navbarLight ? "" : "invert"}`}
            />
            <span
              className={`ml-4 text-sm font-bold transition-colors duration-500 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              La esencia está en los recuerdos
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#seccion2"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Qué es
            </a>
            <a
              href="#seccion3"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Fases
            </a>
            <a
              href="#seccion4"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Ayudas
            </a>
            <a
              href="#section5"
              className={`text-sm font-medium transition-colors duration-500 hover:opacity-80 ${
                navbarLight ? "text-gray-700" : "text-white"
              }`}
            >
              Visibilidad
            </a>

            <Button
              variant="default"
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? "cursor-pointer" : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"}
            >
              {darkMode ? "🌙" : "☀️"}
            </Button>
          </div>
        </div>
      </nav>

      <main className={`${quicksand.className} transition-colors duration-500 bg-white dark:bg-gray-900`}
      >
        {/* Sección 1 */}
        <Section1 navbarLight={navbarLight} />

        {/* Sección 2 */}
        <Section2 />

        {/* WAVE DIVIDER */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[139%] h-[66px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#F0F0F0] dark:fill-[#19274F]"
            />
          </svg>
        </div>

        {/* Sección 3 */}
        <Section3 />

        {/* WAVE DIVIDER */}

        <div className="relative w-full overflow-hidden leading-none -rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[139%] h-[66px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#F0F0F0] dark:fill-[#19274F]"
            />
          </svg>
        </div>

        {/* Sección 4 */}
        <Section4 />

        {/* WAVE DIVIDER */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[139%] h-[66px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#F0F0F0] dark:fill-[#19274F]"
            />
          </svg>
        </div>

        {/* Sección 5 */}
        <Section5 />

      </main>

    </>
  );
}
