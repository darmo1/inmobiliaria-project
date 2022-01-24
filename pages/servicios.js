import React from "react";
import LayoutSecundary from "../Layout/LayoutSecundary";
import Image from "next/image";

function Servicios() {
  return (
    <div>
      <div className="max-2xl mx-auto">
        <LayoutSecundary showBanner={true}>
          <div className="">
            <h2 className="md:text-2xl font-semibold -mt-16  px-8 text-lg">
              Un enfoque en gestión administrativa para la calidad de vida de
              los propietarios y residentes
            </h2>
            <main className=" flex flex-wrap   mx-auto md:flex-col md:flex-nowrap">

              <div className="my-8 mx-2 md:my-2  ">

                <div className="border  rounded-2xl flex flex-wrap py-4 w-screen md:w-full">
                  <div className="w-full md:w-1/2 h-96  ml-6 relative">
                  <Image
                    alt="service"
                    src="/build.jpg"
                   layout="fill"
                   objectFit="cover"
                   className="rounded-2xl"
                  />
                  </div>

                 <div className=" pl-6 md:w-2/4">
                 <h1 className="text-2xl my-4">Administración Integral de Propiedad Horizontal</h1>
                  <p className="text-justify">
                    Es el servicio de gestión administrativa de óptima calidad,
                    basado en la planeación, ejecución y control estratégico de
                    los recursos humanos, financieros, técnicos y de
                    infraestructura asociados a cada propiedad horizontal.
                  </p>
                 </div>

                </div>
              </div>
              <div className="my-8 mx-2 md:my-2 ">
                <div className="border px-4 rounded-2xl flex flex-wrap py-4 md:w-full w-screen">
                 
               <div className=" pr-6 w-full  md:w-1/2 ">
               <h1 className="text-2xl my-4">Asesoría y Consultoría</h1>
                  <p className="text-justify">
                    <ul>
                      <li>
                        Plan de Manejo Integral de Residuos Sólidos (PMIRS){" "}
                      </li>
                      <li>Plan de Emergencia (PE)</li>
                      <li>
                        Sistema de Gestión de Seguridad y Salud en el Trabajo
                        (SG-SST)
                      </li>
                      <li>
                        Desfibrilador Externo Automático) y área cardio
                        protegida (DEA)
                      </li>
                      <li>Red Contra Incendios (RCI)</li>
                      <li>Habeas Data (HD)</li>
                      <li>Gestión y manejo de cartera (G&C)</li>
                    </ul>
                  </p>
               </div>
               <div  className="w-full md:w-1/2 h-96 relative ">
               <Image
                    alt="service"
                    src="/admin.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
               </div>
                </div>
              </div>

              <div className="my-8 mx-2 md:my-2  ">
                <div className="border px-4 rounded-2xl  flex flex-wrap py-4 w-screen md:w-full" >
                  
                  
                  <div className="w-full md:w-1/2 h-96  mr-6 relative" >
                  <Image
                    alt="service"
                    src="/law.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                  </div>

                 <div className="w-full md:w-1/3">
                 <h1 className="text-2xl my-4">Servicios jurídicos</h1>
                  <p className="text-justify">Asesorías y procesos legales</p>
                 </div>
                </div>
              </div>
            </main>
          </div>
        </LayoutSecundary>
      </div>
      <style jsx>{`
        li{
            margin: 1rem 0;
        }

        h1{
            position: relative;
          
            padding-left: 1rem;
        }
        h1::before{
            content: "";
            width: 0.2rem;
            height: 1.4rem;
            background: #5e0817;
            position:absolute;
            top:20%;
            left:0rem;
        }
        h2{
            color: #0a2540;
        }
      `}</style>
    </div>
  );
}

export default Servicios;
