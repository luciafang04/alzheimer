"use client";

import AlertDialogItem from "@/components/AlertDialogItem";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const alzheimerData = [
  { edad: "65-69", Porcentaje: 0.8 },
  { edad: "70-74", Porcentaje: 2.0 },
  { edad: "75-79", Porcentaje: 4.9 },
  { edad: "80-84", Porcentaje: 9.9 },
  { edad: "85-89", Porcentaje: 16.2 },
  { edad: "90+", Porcentaje: 20.4 },
];

export default function Section2() {
  return (
<section className="w-full pt-24 pb-32 bg-bgLight dark:bg-bgDark">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-4xl font-bold mb-6 text-textLight dark:text-textDark">
          Comprender el <span style={{ color: "#D41EA4" }}>Alzheimer </span>
          es el primer paso
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

        {/* Caja rosa con gráfico */}
        <div className="w-full bg-pink-100 rounded-xl p-8 mt-20 flex flex-col md:flex-row items-start gap-8">

          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Frecuencia por edad
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              El riesgo de desarrollarlo aumenta con la edad. Antes de los 70 años la
              prevalencia es baja, pero a partir de los 70 años se incrementa notablemente,
              llegando a afectar a más del 20 % de las personas mayores de 90 años.
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
  );
}
