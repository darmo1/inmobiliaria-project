
'use client'

import * as React from "react";
import sanityClient  from "../lib/sanity";
import ItemPQR from "./ItemPQR";

const PQRS = () => {
  const [pqrs, setPQRS] = React.useState([]);


  React.useEffect(() => {
    function getPQRS() {
      return sanityClient.fetch(`*[_type == 'pqrs']{
                _id,
                preguntas,
                slug,
                summary,
                'imageSmall': poster{asset}
              }
               `);
    }

    getPQRS()
      .then((data) => {
        const dataState = [...data].map( item => {
            return {...item, isOpen: false}
        })

        setPQRS([...dataState]);
      })
      .catch((err) => setPQRS([]));
  }, []);


  return (
    <section className="lg:max-w-4xl m-auto lg:px-0 sm:w-full sm:px-4  ">
      <h1 className="text-2xl text-center py-4">PQRS</h1>
      <div className="flex flex-wrap my-4">
        <div className="w-full md:w-1/2">
            <img src="/preguntas.jpg" alt="questionImage" className=" "/>
        </div>
        <div className="w-full px-6 md:w-1/2 md:px-0">
          { pqrs.map( ({ _id, preguntas, slug, summary }) => {
              return (
                <ItemPQR
                key={_id}
                id={_id}
                title={preguntas}
                slug={slug}
                description={summary}
                PQRS={pqrs}
                setPQRS={setPQRS}
              />
              )
          } )}
        </div>
      </div>
    </section>
  );
};

export default PQRS;
