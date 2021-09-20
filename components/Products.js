import React from 'react'
import Image from 'next/image';
import ContainerService from '../components/ContainerService'
import {ProductsList} from '../Utils/ProductsList'


const Products = () => {
    return (
        <section className="w-full -mt-12 px-2">

            <div >
                <div className="flex justify-center">
                    <Image 
                    src={"/propiedad-horizontal.svg"} 
                    alt="servicio-propiedad-horizontal"
                    width="250"
                    height="250"
                   
                    />
                </div>
            </div>

            <h1 className="w-4/5 text-center text-2xl font-bold text-gray-500 mx-auto ">Te ofrecemos los mejores servicios en:</h1>

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
                  width="200" 
                  height="200" />
                  </div>
                  
                  <h2 className="text-center font-semibold">{product.serviceName}</h2>
                  <p className="text-center font-normal">{product.extract}</p>
              </li>
            )
          })
        }
      </ContainerService>




        </section>
            
            
    
    )
}

export default Products
