import React from "react";
import LayoutSecundary from "../Layout/LayoutSecundary";

function Nosotros() {
  return (
    <LayoutSecundary>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl mb-4"> Quiénes Somos </h1>
        <p>
          💡 Somos una empresa dedicada a la administración de la propiedad
          horizontal en todo el territorio colombiano.
          <br />
          <br />
          🧑‍💼 Contamos con un excelente equipo de profesionales y tecnológico
          para gestionar
          <ol className="ml-12 my-4">
            <li>✔️ El cuidado y mantenimiento de los edificios</li>
            <li>✔️ embellecimiento de las zonas comunes</li>
            <li>✔️ Las buena prácticas de convivencia</li>
            <li>
            ✔️ El manejo financiero eficaz para el beneficio de los
              coopropietarios
            </li>
          </ol>
          <br />
          <div className="w-2/3 border rounded-2xl p-4 mt-4 bg-customRed text-white mx-auto">
            Todo lo anterior es orientado con el cumplimiento de los mandatos
            constitucionales,
            <ul className="ml-4 mt-4">
              <li>💡 la ley 675 de 2001</li>
              <li>💡 Los reglamentos</li>
              <li>💡 El manual de convivencia</li>
            </ul>
          </div>
          <br />
         <p className="my-4 text-center font-semibold "> Sus opiniones y sugerencias es lo más importante.</p>
        </p>
      </div>
    </LayoutSecundary>
  );
}

export default Nosotros;
