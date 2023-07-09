import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-4xl flex my-16 mx-auto mb-28 ">
      <div className="text-3xl w-2/4 flex flex-col justify-center ">
        <div className="my-0">Deja en nuestras manos</div>
        <div className="my-0">
          la <span className="font-bold">administración</span> de{" "}
        </div>
        <div className="my-0"> tu propiedad</div>

        <Link href="https://api.whatsapp.com/send?phone=573007064360" className="mt-16" target="_blank">
        
            <div
              type="button"
              className="bg-customRed inline-block px-6  py-2 text-base text-white rounded-lg"
            >
              Conoce más
            </div>
         
        </Link>
      </div>

      <div className="flex justify-center  relative w-1/2 h-96">
     {/* <div className="w-full ">
     <Image
          src={"/blob.svg"}
          alt="servicio-propiedad-horizontal"
          layout="fill"
          objectFit="cover"
          className=""
        />
     </div> */}
       <div className=" flex justify-center items-center absolute inset-0 ">
       <Image
          src={"/propiedad-horizontal.svg"}
          alt="servicio-propiedad-horizontal"
          width="400"
          height="400"
          className="absolute "
        />
       </div>
      </div>
    </section>
  );
};

export default Banner;
