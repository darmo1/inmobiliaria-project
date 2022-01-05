import React from "react";
import EquipoCard from "./EquipoCard";

const Equipo = ({ dataEquipo }) => {

  return (
    <section className="bg-customRed py-12">
        <h1 className="text-lg font-bold sm:text-5xl text-center text-white"> Conoce el equipo de trabajo </h1>
    <div className="max-w-5xl mx-auto  my-12 flex flex-wrap">
      {dataEquipo
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          return (
            <EquipoCard
              name={item.name}
              image={item.image}
              descripcion={item.descripcion}
              key={item._id}
            />
          );
        })}
    </div>
    </section>
  );
};

export default Equipo;
