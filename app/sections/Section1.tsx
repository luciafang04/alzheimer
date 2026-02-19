"use client";

import { domine } from "../layout";

interface Section1Props {
  navbarLight: boolean; // solo recibimos esto
}

export default function Section1({ navbarLight }: Section1Props) {
  return (
    <section
      id="seccion1"
      className="h-screen flex items-center justify-center bg-cover bg-center px-4 pt-16 transition-colors duration-500"
      style={{ backgroundImage: "url('/portada.jpg')" }}
    >
      <h1
        className={`${domine.className} text-4xl md:text-6xl font-bold text-center drop-shadow-lg transition-colors duration-500 ${
          navbarLight ? "text-white" : "text-black"
        }`}
      >
        No se pierde la memoria, <br />perdemos a la persona
      </h1>
    </section>
  );
}
