import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

const DetailHouses = ({ card }) => {
  function renderStart(value) {
    switch (value) {
      case 1:
        return <p className="text-sm ml-2"> ⭐☆☆☆☆ </p>;
      case 2:
        return (
          <p className="text-sm ml-2" ml-2>
            {" "}
            ⭐⭐☆☆☆{" "}
          </p>
        );
      case 3:
        return <p className="text-sm ml-2"> ⭐⭐⭐☆☆ </p>;
      case 4:
        return <p className="text-sm ml-2"> ⭐⭐⭐⭐☆ </p>;
      case 5:
        return <p className="text-sm ml-2"> ⭐⭐⭐⭐⭐ </p>;
    }
  }

  return (
    <div className="bg-white  rounded-lg  min-h-full">
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl  border rounded-lg">
       
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-xl text-gray-600 font-semibold my-2">
          {card.name}{" "}
        </h1>
        <div className=" flex text-sm">
          {" "}
          Valoracion: {renderStart(card.valoracion)}{" "}
        </div>
        <div className="w-4/5 mb-4">
            <h1>Detalles</h1>
          <span className="text-sm flex my-2 items-center">
            <img
              src="/habitacion.svg"
              alt="habitaciones"
              className="w-6 mr-2"
            />
            {card.habitaciones ?? 0} Habitaciones
          </span>
          <span className="text-sm flex my-2 items-center">
            <img src="/cocina.svg" alt="habitaciones" className="w-6 mr-2" />
            {card.habitaciones === 1
              ? `${card.cocinas ?? 0} cocina`
              : `${card.cocinas?? 0} cocinas`}
          </span>
          <span className="text-sm flex my-2 items-center">
            <img src="/bathroom.svg" alt="habitaciones" className="w-6 mr-2" />
            {card.habitaciones === 1
              ? `${card.bathroom ?? 0} baño`
              : `${card.bathroom?? 0} baños`}
          </span>
          <span className="text-sm flex items-center my-2">
            {card.parqueadero && (
              <span className="flex">
                <img
                  src="/parqueadero.svg"
                  alt="parqueadero"
                  className="w-6 mr-2"
                />
                parqueadero
              </span>
            )}
          </span>
          {card.piscina && (
            <span className="text-sm flex items-center my-2">
              <img src="/piscina.svg" alt="piscina" className="w-6 mr-2" />
              Piscina
            </span>
          )}
          <span className="text-sm flex items-center my-2">
            <img src="/gps.svg" alt="direccion" className="w-6 mr-2" />
            {card.address}
          </span>
        </div>
        <div className="font-semibold flex ">Desde: {card.price}</div>
      </div>

      <div className="m-4 max-w-5xl mx-auto"> {card?.detalle ? <div> {card.detalle}</div> : null}</div>
      <style jsx>{`
        span img {
          width: 20px;
        }
      `}</style>
    </div>
  );
};

export default DetailHouses;
