"use client";

import { useEffect, useState } from "react";

export default function Section5() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    }

    if (isVideoOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section
      id="section5"
      className="relative bg-[#F0F0F0] dark:bg-[#19274F] py-32 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Imagen */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/alzheimer.webp"
              alt="Pérdida de identidad por Alzheimer"
              className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl opacity-90"
            />
          </div>

          {/* Texto */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              No es solo una <span className="text-[#D41EA4]">enfermedad</span> de mayores
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Durante demasiado tiempo se ha aceptado el Alzheimer como algo inevitable.
              Como si formar parte de la vejez lo convirtiera en algo normal.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Pero el Alzheimer{" "}
              <span className="font-semibold text-[#2E8E8F]">no es solo olvidar</span>.
              Es dejar de reconocerse.
              Es perder recuerdos que construyen quién eres.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Aceptar la enfermedad no puede significar resignarse.
              {" "}
              <span className="text-[#2E8E8F]">
                No investigar, no invertir y no cuidar también es una decisión.
              </span>
            </p>

            {/* Frase destacada + accion de video */}
            <div className="flex items-center gap-10">
              <div className="border-l-4 border-gray-900 dark:border-white pl-4">
                <p className="text-xl font-medium text-[#D41EA4]">
                  No es solo olvidar.<br />
                  Es perder la identidad.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  aria-label="Ver video"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Aquí una pequeña muestra
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-end px-3 py-2 bg-black">
              <button
                type="button"
                className="text-white text-sm uppercase tracking-wide hover:opacity-80 cursor-pointer"
                onClick={() => setIsVideoOpen(false)}
              >
                X
              </button>
            </div>
            <div className="aspect-video bg-black">
              <video className="w-full h-full" controls autoPlay playsInline>
                <source src="/video.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
