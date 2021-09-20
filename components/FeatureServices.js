import React from 'react'
import Image from "next/image"
import ContainerService from './ContainerService'
import {ProductsFeature} from '../Utils/ProductsFeature'

const FeatureServices = () => {
    return (
        <section className="w-full px-2">
            <h1 className="w-4/5 text-center text-2xl font-bold text-gray-500 mx-auto">Lo hacemos posible:</h1>
            <ContainerService>
                {ProductsFeature.map( ({id, img, featureName, extract}) => {
                    return (
                        <li key={id} className="w-full px-2 flex-col my-12">
                            <div className="flex justify-center my-2">
                                <Image 
                                src={img} 
                                alt="service-feature" 
                                width="200" 
                                height="200" 
                                />
                            </div>
                            <h2 className="text-center font-semibold">{featureName}</h2>
                            <p className="text-center font-normal">{extract}</p>
                        </li>
                    )
                })}
            </ContainerService>
           
            
        </section>
    )
}

export default FeatureServices
