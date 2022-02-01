import React from "react";
import Title from "../components/Title";
import { Info } from "../Utils/Info";
import Image from "next/image";

function Contact() {

  return (
    <main className="max-w-4xl mx-auto  mb-4 px-4">
      <Title name="Contáctenos" />
      <section className=" md:flex md:justify-between -mt-8">
        <div>
          {Info.map(({ id, name, value, image }) => {
            return (
              <div key={id} className="px-4 py-2">
                <h2 className="font-semibold my-2 text-lg">{name}</h2>
                <div className="flex">
                  <Image
                    src={image}
                    alt=""
                    width="30"
                    height="30"
                    className=""
                  />
                  <p className="mx-4">{value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-4 md:my-0 w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.8807289318051!2d-75.56556356221948!3d6.251652175454191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f9a1f3408f%3A0x6463415a45563c5c!2sCra.%2049%20%2353%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1643669024512!5m2!1ses!2sco"
            className="iframe"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <style jsx>{`
      .iframe{
        width:100%;
        height:100%;
      }
      `}</style>
    </main>
  );
}

export default Contact;
