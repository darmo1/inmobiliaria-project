import React from "react";
import Image from "next/image";
import Link from "next/link";

const Grid = () => {
  return (
    <div className="max-w-4xl mx-auto md:grid md:grid-col-presentationalCol md:grid-row-presentationalRow gap-2 flex flex-col md:h-96 my-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-2  relative rounded-2xl">
        <Link href="/servicios">
       
            <>
              <Image
                src="/adminProperties.jpg"
                alt="admin-properties"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl "
              />
              <div className="absolute bottom-2  w-full backdrop-filter backdrop-blur-sm h-content px-4 my-4  ">
                <h1 className="text-2xl">Administración de propiedades</h1>
                <p>
                  Urbanizaciones, edificios, centros comerciales, hoteles etc.
                </p>
              </div>
            </>
        
        </Link>
      </div>

      <div className="row-start-1 row-end-2 col-start-2 col-end-3  relative">
        <Link href="/servicios">
       
            <>
              <Image
                src="/law.jpg"
                alt="law-properties"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-2  w-full backdrop-filter backdrop-blur-xl h-content px-4 my-4 ">
                <h1 className="text-2xl">Servicios Jurídicos</h1>
                <div>Asesoramiento y procesos legales</div>
              </div>
            </>
        
        </Link>
      </div>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3  relative rounded-2xl">
        <Link href="/servicios">
        
            <>
              <Image
                src="/mueble-pink.jpg"
                alt="muebles-properties"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-2  w-full backdrop-filter backdrop-blur-md h-content px-4 my-4">
                <h1 className="text-2xl">Ventas de muebles e inmuebles</h1>
                <div>Administramos y te ayudamos a vender muebles e inmuebles</div>
              </div>
            </>
         
        </Link>
      </div>
    </div>
  );
};

export default Grid;
