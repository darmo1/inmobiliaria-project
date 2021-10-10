import React from "react";
import Link from 'next/link'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="max-w-4xl flex my-16 mx-auto mb-28">
      <div className="text-3xl w-3/4 flex flex-col justify-center ">
          <p className="my-0">Deja en nuestras manos</p> 
          <p className="my-0">la <span className="font-bold">administración</span> de </p> 
          <p className="my-0"> tu propiedad</p>
        
        <Link href="#">
        <a className="mt-16">
            <div type="button" className="bg-purple inline-block px-6  py-2 text-base text-white rounded-lg">
                Conoce más
            </div>
        </a>
        
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          src={"/propiedad-horizontal.svg"}
          alt="servicio-propiedad-horizontal"
          width="450"
          height="350"
        />
      </div>
    </section>
  );
};

export default Banner;
