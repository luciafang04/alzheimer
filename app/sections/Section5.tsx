"use client";

export default function Section5() {
  return (
    <section
      id="section5"
      className="relative bg-[#F0F0F0] dark:bg-[#19274F] py-32 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
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

          {/* Frase destacada */}
          <div className="border-l-4 border-gray-900 dark:border-white pl-4">
            <p className="text-xl font-medium text-[#D41EA4]">
              No es solo olvidar.<br />
              Es perder la identidad.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

