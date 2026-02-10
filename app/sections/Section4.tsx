"use client";

import { domine } from "../layout";

type AyudaItem = {
  label: string;
  detail?: string;
};

type Fase = {
  color: string;
  title: string;
  grado: string;
  gradoDetalle: string;
  description: string;
  ayudas: AyudaItem[];
  note: string;
};

type BloqueApoyo = {
  title: string;
  items: AyudaItem[];
};

const fases: Fase[] = [
  {
    color: "#F5D24A",
    title: "Fase Inicial",
    grado: "Grado I",
    gradoDetalle: "dependencia moderada",
    description: "La persona todavía es bastante autónoma.",
    ayudas: [
      { label: "Reconocimiento de dependencia (Grado I)" },
      {
        label: "Ayuda a domicilio puntual",
        detail: "Unas horas a la semana para apoyo básico.",
      },
      { label: "Centros de día", detail: "Acceso parcial o listas." },
      {
        label: "Estimulación cognitiva",
        detail: "Muchas veces vía asociaciones.",
      },
      { label: "Tratamiento médico cubierto por la SS" },
    ],
    note: "Aquí las ayudas económicas suelen ser bajas o inexistentes; prima el apoyo puntual.",
  },
  {
    color: "#F2A74B",
    title: "Fase Intermedia",
    grado: "Grado II",
    gradoDetalle: "dependencia severa",
    description: "La persona ya necesita ayuda diaria.",
    ayudas: [
      {
        label: "Prestación económica mensual",
        detail: "Para cuidados en el entorno familiar o para pagar servicios privados.",
      },
      { label: "Ayuda a domicilio regular" },
      { label: "Centro de día", detail: "Muy habitual en esta fase." },
      { label: "Teleasistencia" },
      { label: "Programas terapéuticos y rehabilitación" },
    ],
    note: "La cuantía depende de ingresos, pero ya hay apoyo económico real.",
  },
  {
    color: "#E65454",
    title: "Fase Avanzada",
    grado: "Grado III",
    gradoDetalle: "gran dependencia",
    description: "Dependencia casi total o total.",
    ayudas: [
      { label: "Prestación económica mayor" },
      { label: "Cuidados profesionales en casa" },
      { label: "Plaza en residencia pública o concertada" },
      { label: "Atención sociosanitaria continuada" },
      { label: "Material ortoprotésico", detail: "Camas articuladas, grúas..." },
    ],
    note: "Aquí es donde más recursos intervienen.",
  },
];

const apoyos: BloqueApoyo[] = [
  {
    title: "Para cuidadores familiares",
    items: [
      { label: "Prestación por cuidados en el entorno familiar" },
      { label: "Alta del cuidador no profesional en la Seguridad Social" },
      { label: "Reducción de jornada laboral" },
      { label: "Excedencia por cuidado de familiar" },
      { label: "Apoyo psicológico y formación" },
    ],
  },
  {
    title: "Asociaciones de Alzheimer",
    items: [
      { label: "Grupos de apoyo" },
      { label: "Terapias" },
      { label: "Respiro familiar" },
    ],
  },
  {
    title: "Servicios sociales municipales",
    items: [{ label: "Asesoramiento legal y administrativo" }],
  },
];

export default function Section4() {
  return (
    <section
      id="seccion4"
      className="relative bg-bgLight dark:bg-bgDark text-black dark:text-white py-20 px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2E8E8F]">
            Recursos en España
          </p>
          <h2 className={`${domine.className} mt-3 text-3xl md:text-4xl font-bold`}>
            <span className="text-[#D41EA4]">Ayudas</span> para personas con
            Alzheimer <span className="text-[#D41EA4]">según el grado</span>
          </h2>
          <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            En España, casi todo gira en torno a la{" "}
            <span className="text-[#2E8E8F]">Ley de Dependencia</span>, <br></br>
            que clasifica a la persona en Grado I, II o III.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {fases.map((fase) => (
            <article
              key={fase.title}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold"
                style={{ backgroundColor: `${fase.color}33`, color: fase.color }}
              >
                {fase.title}
              </div>
              <h3 className={`${domine.className} mt-4 text-lg font-semibold`}>
                <span className="text-[#D41EA4]">{fase.grado}</span>{" "}
                <span className="text-[#D190BA]">({fase.gradoDetalle})</span>
              </h3>
              <p className="mt-2 text-sm text-[#2E8E8F]">
                {fase.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                {fase.ayudas.map((ayuda) => (
                  <li key={ayuda.label} className="leading-relaxed">
                    <span className="font-medium">{ayuda.label}</span>
                    {ayuda.detail ? (
                      <span className="text-black/70 dark:text-white/70">
                        {" "}({ayuda.detail})
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-medium text-black/70 dark:text-white/70">
                {fase.note}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-black/10 dark:border-white/10 bg-pink-100 p-8 text-black">
          <h3 className={`${domine.className} text-2xl font-semibold text-[#D41EA4]`}>
            Ayudas para las familias y cuidadores
          </h3>
          <p className="mt-2 text-black/70">
            Muy importantes y muchas veces invisibles.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {apoyos.map((bloque) => (
              <div key={bloque.title}>
                <h4 className={`${domine.className} font-semibold text-[#2E8E8F]`}>{bloque.title}</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {bloque.items.map((item) => (
                    <li key={item.label} className="leading-relaxed">
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}








