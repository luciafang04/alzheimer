"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lenis from "@studio-freight/lenis";
import { domine } from "./layout"; 
import AlertDialogItem from "@/components/AlertDialogItem"; 

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
        className={`fixed top-0 left-0 w-full shadow-md z-50 transition-transform duration-500 ${
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

      <main className={`${domine.className} transition-colors duration-500 bg-white dark:bg-gray-900`}>
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
        <section className="w-full py-24 bg-bgLight dark:bg-bgDark">
          <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Título */}
            <h2 className="text-4xl font-bold mb-6 text-textLight dark:text-textDark">
              Comprender el <span style={{ color: "#D41EA4" }}>Alzheimer </span>es el primer paso
            </h2>

            {/* Descripción */}
            <p className="max-w-3xl mx-auto text-lg text-textLight/70 dark:text-textDark/80 mb-16">
              El Alzheimer no solo afecta a quien lo padece, sino también a su entorno.{" "}
              <strong className="font-semibold text-textLight dark:text-textDark">
                Entender qué es, por qué ocurre y qué podemos hacer frente a ella es clave
                para acompañar, prevenir y cuidar mejor.
              </strong>
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Item 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-5xl">🏥</div>
                <p className="text-xl font-semibold text-textLight dark:text-textDark">
                  Qué es y sus <br />
                  diferentes <span style={{ color: "#2E8E8F" }}>fases</span>.
                </p>
                <AlertDialogItem
                  triggerText={<span style={{ color: "#F781D9" }}>→</span>}
                  title="Información sobre las fases del Alzheimer"
                  description="Aquí puedes poner la información detallada sobre las diferentes fases del Alzheimer."
                />
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-5xl">🚶‍♂️‍➡️</div>
                <p className="text-xl font-semibold text-textLight dark:text-textDark">
                  Cómo aparece, <br />
                  ¿es <span style={{ color: "#2E8E8F" }}>por herencia</span>?
                </p>
                <AlertDialogItem
                  triggerText={<span style={{ color: "#F781D9" }}>→</span>}
                  title="Herencia y aparición del Alzheimer"
                  description="Aquí puedes poner la información sobre cómo aparece el Alzheimer y si está relacionado con la herencia."
                />
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-5xl">💊</div>
                <p className="text-xl font-semibold text-textLight dark:text-textDark">
                  ¿Se puede <span style={{ color: "#2E8E8F" }}>prevenir</span>
                  <br />o <span style={{ color: "#2E8E8F" }}>curar</span>?
                </p>
                <AlertDialogItem
                  triggerText={<span style={{ color: "#F781D9" }}>→</span>}
                  title="Prevención y tratamiento del Alzheimer"
                  description="Aquí puedes poner la información sobre las posibilidades de prevención y tratamiento del Alzheimer."
                />
              </div>

            </div>

            {/* Div rosa con gráfico */}

          <div className="w-full bg-pink-100 rounded-xl p-8 mt-20 flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 text-left">
              {/* Título */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Frecuencia del Alzheimer <br />por edad
              </h3>

              {/* Texto */}
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                El riesgo de desarrollar Alzheimer aumenta con la edad. Antes de los 70 años la prevalencia es baja, pero a partir de los 70 años se incrementa notablemente, llegando a afectar a más del 20 % de las personas mayores de 90 años. Este gráfico muestra la proporción de casos por rango de edad, permitiendo ver cómo la enfermedad se vuelve más frecuente conforme envejecemos y destacando la importancia de la prevención y detección temprana.
              </p>
            </div>

            <div className="md:w-1/2 h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={alzheimerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="edad" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 rounded shadow-lg">
                            <p className="text-black font-bold">{label}</p>
                            <p className="text-black">{payload[0].value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="Porcentaje" fill="#D41EA4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


          </div>
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
    </>
  );
}
