"use client";

export default function Section3() {
  const fases = [
    {
      color: "#D4BECA",
      title: "Fase 1",
      subtitle: "Fase Inicial",
      puntos: [
        "Olvidos ocasionales de nombres o lugares",
        "Dificultad para concentrarse",
        "Problemas leves para planificar tareas",
        "Perder objetos pequeños",
        "Repetición de preguntas",
      ],
    },
    {
      color: "#D190BA",
      title: "Fase 2",
      subtitle: "Fase Moderada",
      puntos: [
        "Confusión sobre la ubicación o la fecha",
        "Dificultad para recordar eventos recientes",
        "Necesita ayuda en tareas diarias",
        "Cambios de humor o personalidad",
        "Problemas para seguir instrucciones complejas",
      ],
    },
    {
      color: "#D171B2",
      title: "Fase 3",
      subtitle: "Fase Grave",
      puntos: [
        "Pérdida de memoria significativa",
        "Dificultad para comunicarse",
        "Necesita asistencia total",
        "Desorientación constante",
        "Problemas de movilidad",
      ],
    },
    {
      color: "#D44AAF",
      title: "Fase 4",
      subtitle: "Fase Terminal",
      puntos: [
        "Olvida a familiares cercanos",
        "Olvida a su pareja",
        "Busca a sus padres",
        "Pérdida de noción del tiempo",
        "Dependencia completa",
      ],
    },
  ];

  return (
    <section
      id="seccion3"
      className="relative bg-[#F0F0F0] dark:bg-[#19274F] flex flex-col items-center py-28 px-6"
    >
      {/* Wave superior */}
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

      {/* Contenedor central */}
<div className="relative w-full max-w-4xl flex justify-center items-center">
  {/* Fases en grid 2x2 */}
  <div className="grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-24 w-full z-10">
    {fases.map((fase, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-start"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-2"
          style={{ backgroundColor: fase.color }}
        >
          {fase.title}
        </div>
        <h3 className="font-semibold text-[#2E8E8F] text-center">{fase.subtitle}</h3>
        <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
          {fase.puntos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Círculo central */}
  <div className="absolute w-32 h-32 rounded-full bg-[#D41EA4] flex items-center justify-center text-black dark:text-white font-bold text-lg shadow-lg z-20">
    Alzheimer
  </div>

  {/* Líneas radiales */}
  <svg
    className="absolute w-full h-full z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <line x1="50" y1="50" x2="30" y2="30" stroke="#C7C7C7" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="70" y2="30" stroke="#C7C7C7" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="70" y2="65" stroke="#C7C7C7" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="30" y2="65" stroke="#C7C7C7" strokeWidth="0.5" />
  </svg>
</div>

    </section>
  );
}
