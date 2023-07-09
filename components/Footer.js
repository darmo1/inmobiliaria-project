import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Info } from "../Utils/Info";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg bg-customRed py-4">
        <div className="w-9/12 h-full flex  flex-wrap  md:flex-nowrap items-center justify-between mx-auto ">
          <div className="text-white">
            <div>
              <h3>Correo</h3>
              <span></span>
            </div>
            <Link href="https://www.instagram.com/inmobiliariadonquijote/?utm_medium=copy_link" className="flex items-center" target={"_blank"}>
             
                <Image
                  src="/instagram.png"
                  alt="icon-instagram"
                  width="50"
                  height="50"
                />
                <div className="text-white font-semibold ml-2">
                  @inmobiliariadonquijote
                </div>
             
            </Link>
          </div>

          <div className="text-white">
            <div>
              <h3 className="my-2 font-semibold">Teléfono único</h3>
              <span>(604) 322 21 31</span>
            </div>
            <div>
              <h3 className="my-2 font-semibold">Teléfono fijo</h3>
              <span>(604) 473 04 58</span>
            </div>
            <div>
              <h3 className="my-2 font-semibold">Móvil</h3>
              <span> 300 706 4360</span>
            </div>
          </div>

          <div className="text-white">
            <div>
              <h3>Dirección</h3>
              <address>Cra 49 # 52 - 141, local 231</address>
            </div>

            <div className="text-white font-semibold">Medellin - Colombia</div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .bg {
          background: #5e0817;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
