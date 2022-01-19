import React from "react";
import LayoutSecundary from "../Layout/LayoutSecundary";
import Image from "next/image";

function Servicios() {
  return (
    <div>
      <div className="max-2xl mx-auto">
        <LayoutSecundary showBanner={true}>
          <div>
            <h2 className="md:text-2xl font-semibold -mt-16  px-8 text-lg">
              Un enfoque en gestión administrativa para la calidad de vida de
              los propietarios y residentes
            </h2>
            <main className="md:grid md:grid-col-services md:gap-16 md:py-4  flex flex-wrap w-3/4 mx-auto">
              <div className="my-8 md:my-2  md:col-start-1">
                <div>
                  <Image
                    alt="service"
                    src="/Analyze.gif"
                    width="100"
                    height="100"
                  />
                  <h1 className="text-2xl my-4">Administración Integral de Propiedad Horizontal</h1>
                  <p className="text-justify">
                    Es el servicio de gestión administrativa de óptima calidad,
                    basado en la planeación, ejecución y control estratégico de
                    los recursos humanos, financieros, técnicos y de
                    infraestructura asociados a cada propiedad horizontal.
                  </p>
                </div>
              </div>
              <div className="my-8 md:my-2  md:col-start-2">
                <div>
                  <Image
                    alt="service"
                    src="/Onlinereport.gif"
                    width="100"
                    height="100"
                  />
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
              </div>
              <div className="my-8 md:my-2  md:col-start-3">
                <div>
                  <Image
                    alt="service"
                    src="/Discussion.gif"
                    width="100"
                    height="100"
                  />
                  <h1 className="text-2xl my-4">Servicios jurídicos</h1>
                  <p className="text-justify">Asesorías y procesos legales</p>
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
