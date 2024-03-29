'use client'
import React from "react";
import Image from "next/image";
import ContainerService from "../components/ContainerService";
import { ProductsList } from "../Utils/ProductsList";

const Products = ({ children }) => {
  return (
    <section className="w-full -mt-12 px-2 my-16">
      <h1 className="w-4/5 text-center text-2xl lg:text-4xl font-bold text-gray-500 mx-auto my-12">
        Te ofrecemos los mejores servicios en:
      </h1>
      {children}
      
        <ContainerService>
        {
          ProductsList.map( product => {
            return (
              <li 
              className="w-full px-2 flex-col "
              key={product.id}>
                  <div className="flex justify-center">
                  <Image 
                  src={product.img} 
                  alt="product-list" 
                  width={150}
                  height={150}
                  className="rounded-full h-44 w-44"
                  loading="lazy"
                  />
                  </div>
                  
                  <h2 className="text-center font-semibold mt-4">{product.serviceName}</h2>
                  <p className="text-center font-normal">{product.extract}</p>
              </li>
            )
          })
        }
      </ContainerService>
    </section>
  );
};

export default Products;
