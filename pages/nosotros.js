import React from "react";
import LayoutSecundary from "../Layout/LayoutSecundary";
import Link from "next/link";

function Nosotros() {
  return (
    <LayoutSecundary>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-xl mb-4"> Quiénes Somos </h1>
        <p className="text-justify">
          <Link href="/">
            <a className="font-bold">INMOBILIARIA DON QUIJOTE</a>
          </Link>{" "}
          nació del sueño de velar por la calidad de vida y el bienestar de la
          comunidad que conforma una Propiedad Horizontal.{" "}
          <b>INMOBILIARIA DON QUIJOTE</b> está conformada por un equipo
          profesional con amplia experiencia en los procesos administrativos
          relacionados con la propiedad horizontal. Es un equipo de personas,
          idóneas y comprometidas, con el continuo crecimiento intelectual y
          actualización profesional. Sus mayores características son la
          sensibilidad y el compromiso ético con los procesos que le vinculan
          con el ser humano en un contexto organización.
        </p>

        <br />
        <h1 className="text-xl mb-4"> Misión </h1>
        <p className="text-justify">
          Ser reconocidos como una firma que se destaca por la calidad y
          coherencia en el diseño e implementación de procesos administrativos
          que convergen en el logro de los objetivos de productividad
          organizacional y de bienestar de las personas que conviven en la
          propiedad horizontal.
        </p>

        <br />
        <h1 className="text-xl mb-4"> Visión </h1>

        <p className="text-justify">
          Para el 2025 <b>INMOBILIARIA DON QUIJOTE</b> será, a nivel regional,
          una organización líder, reconocida por cumplir las normas legales que
          rigen la propiedad horizontal y su compromiso de implementar
          estrategias de organización relacionadas con la convivencia y el
          sostenimiento del patrimonio de los copropietarios.
        </p>
        <br />

        <h1 className="text-xl mb-4"> VALORES CORPORATIVOS </h1>
        <ol className="ml-12 my-4">
          <li>✔️ Adaptabilidad </li>
          <li>💡 Claridad </li>
          <li>🤝 Compromiso</li>
          <li>🎨creatividad</li>
          <li>👩‍🔧 Excelencia</li>
          <li>🧑‍💼 Lealtad</li>
          <li>🧑‍🚀 integridad</li>
        </ol>

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
          <p className="my-4 text-center font-semibold ">
            {" "}
            Sus opiniones y sugerencias es lo más importante.
          </p>
        </p>
      </div>
    </LayoutSecundary>
  );
}

export default Nosotros;
