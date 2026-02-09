"use client";

import { useRef, useState } from "react";

type DraggableBubbleProps = {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  floatDelay?: string;
  floatDuration?: string;
};

function DraggableBubble({
  children,
  className = "",
  wrapperClassName = "",
  floatDelay = "0s",
  floatDuration = "6s",
}: DraggableBubbleProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setPos({
      x: dragRef.current.originX + dx,
      y: dragRef.current.originY + dy,
    });
  };

  const endDrag = () => {
    setDragging(false);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      className={`will-change-transform ${wrapperClassName}`}
      style={{
        animation: `floatBubble ${floatDuration} ease-in-out infinite`,
        animationDelay: floatDelay,
      }}
    >
      <div
        className={`cursor-grab active:cursor-grabbing ${className}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: dragging
            ? "none"
            : "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          touchAction: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
      >
        {children}
      </div>
    </div>
  );
}

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
      className="relative bg-[#F0F0F0] dark:bg-[#19274F] flex flex-col items-center py-16 px-6"
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

      {/* Tí­tulo */}
      <h2 className="text-4xl font-bold mb-16 text-black dark:text-white text-center z-10">
        Las diferentes <span style={{ color: "#D41EA4" }}>fases</span> del Alzheimer
      </h2>

      {/* Contenedor central */}
      <div className="relative w-full max-w-4xl flex justify-center items-center">
        {/* Fases en grid 2x2 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-24 w-full z-10">
          {fases.map((fase, index) => (
            <div key={index} className="flex flex-col items-center justify-start">
              <DraggableBubble floatDelay={`${index * 0.3}s`}>
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-2"
                  style={{ backgroundColor: fase.color }}
                >
                  {fase.title}
                </div>
              </DraggableBubble>
              <h3 className="font-semibold text-[#2E8E8F] text-center">{fase.subtitle}</h3>
              <div className="text-black/70 dark:text-white/70 mt-1 text-sm text-center space-y-1">
                {fase.puntos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CÃ­rculo central */}
        <DraggableBubble
          wrapperClassName="absolute z-20"
          floatDelay="0.6s"
          floatDuration="7s"
        >
          <div className="w-32 h-32 rounded-full bg-[#D41EA4] flex items-center justify-center text-black dark:text-white font-bold text-lg shadow-lg">
            Alzheimer
          </div>
        </DraggableBubble>

        {/* LÃ­neas radiales */}
        <svg
          className="absolute w-full h-full z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="50" y1="50" x2="35" y2="35" stroke="#C7C7C7" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="65" y2="35" stroke="#C7C7C7" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="65" y2="65" stroke="#C7C7C7" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="35" y2="65" stroke="#C7C7C7" strokeWidth="0.5" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes floatBubble {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
