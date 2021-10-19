import React from 'react'
import { PortableText, urlFor } from "../lib/sanity";

const EquipoCard = (props) => {
    return (
        <div className='w-1/2 sm:w-1/4 mx-auto'>
            <img src={urlFor(props.image).url()} alt={props.name} className='rounded-full sm:rounded-lg mb-6'/>
            <h2 className='text-base sm:text-xl text-white mb-4 font-bold text-center'>{props.name}</h2>
            <p className=' text-sm   text-white sm:text-center'><PortableText blocks={props?.descripcion} /></p>
        </div>
    )
}

export default EquipoCard
