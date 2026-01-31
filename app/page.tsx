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
                ¿Qué es y por qué <br />
                  es <span style={{ color: "#2E8E8F" }}>importante</span>?
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
                Frecuencia por edad
              </h3>

              {/* Texto */}
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                El riesgo de desarrollarlo aumenta con la edad. Antes de los 70 años la prevalencia es baja, pero a partir de los 70 años se incrementa notablemente, llegando a afectar a más del 20 % de las personas mayores de 90 años. Este gráfico muestra la proporción de casos por rango de edad, permitiendo ver cómo la enfermedad se vuelve más frecuente conforme envejecemos y destacando la importancia de la prevención y detección temprana.
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

<section
  id="seccion3"
  className="relative bg-[#F0F0F0] dark:bg-[#19274F] flex flex-col items-center py-28 px-6"
>
  {/* Wave al inicio */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
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

  {/* Título */}
  <h2 className="text-4xl font-bold mb-32 text-black dark:text-white text-center z-10">
    Las diferentes <span style={{ color: "#D41EA4" }}>fases</span> del Alzheimer
  </h2>

  <div className="relative w-full max-w-3xl h-[28rem] flex items-center justify-center">
    {/* Círculo central */}
    <div className="absolute w-32 h-32 rounded-full bg-[#D41EA4]  flex items-center justify-center text-black dark:text-white font-bold text-lg shadow-lg z-10">
      Alzheimer
    </div>

    {/* ------------------- Fase 1 ------------------- */}
    <div className="absolute -top-12 -left-12 flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full bg-[#D4BECA] flex items-center justify-center font-bold text-lg shadow-lg mb-2">
        Fase 1
      </div>
      <h3 className="font-semibold text-[#2E8E8F] text-center">Fase Inicial</h3>
      <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
        <p>Olvidos ocasionales de nombres o lugares</p>
        <p>Dificultad para concentrarse</p>
        <p>Problemas leves para planificar tareas</p>
        <p>Perder objetos pequeños</p>
        <p>Repetición de preguntas</p>
      </div>
    </div>

    {/* ------------------- Fase 2 ------------------- */}
    <div className="absolute -top-12 -right-12 flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full bg-[#D190BA] flex items-center justify-center font-bold text-lg shadow-lg mb-2">
        Fase 2
      </div>
      <h3 className="font-semibold text-[#2E8E8F] text-center">Fase Moderada</h3>
      <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
        <p>Confusión sobre la ubicación o la fecha</p>
        <p>Dificultad para recordar eventos recientes</p>
        <p>Necesita ayuda en tareas diarias</p>
        <p>Cambios de humor o personalidad</p>
        <p>Problemas para seguir instrucciones complejas</p>
      </div>
    </div>

    {/* ------------------- Fase 3 ------------------- */}
    <div className="absolute -bottom-24 -left-12 flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full bg-[#D171B2] flex items-center justify-center font-bold text-lg shadow-lg mb-2">
        Fase 3
      </div>
      <h3 className="font-semibold text-[#2E8E8F] text-center">Fase Grave</h3>
      <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
        <p>Pérdida de memoria significativa</p>
        <p>Dificultad para comunicarse</p>
        <p>Necesita asistencia total para actividades diarias</p>
        <p>Desorientación constante</p>
        <p>Problemas de movilidad y coordinación</p>
      </div>
    </div>

    {/* ------------------- Fase 4 ------------------- */}
    <div className="absolute -bottom-24 -right-12 flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full bg-[#D44AAF] flex items-center justify-center font-bold text-lg shadow-lg mb-2">
        Fase 4
      </div>
      <h3 className="font-semibold text-[#2E8E8F] text-center">Fase Terminal</h3>
      <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
        <p>Olvida a familiares cercanos</p>
        <p>Olvida a su pareja</p>
        <p>Piensa que es un niño y busca a sus padres</p>
        <p>Pérdida total de la noción del tiempo y edad</p>
        <p>Dependencia completa para todas las actividades</p>
      </div>
    </div>

    {/* ------------------- Líneas radiales ------------------- */}
    <svg className="absolute w-full h-full z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Líneas finitas y ajustadas para tocar las bolas */}
      <line x1="50" y1="50" x2="28" y2="23" stroke="#C7C7C7" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="72" y2="23" stroke="#C7C7C7" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="72" y2="75" stroke="#C7C7C7" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="28" y2="75" stroke="#C7C7C7" strokeWidth="0.5" />
    </svg>
  </div>
</section>



      </main>
    </>
  );
}
