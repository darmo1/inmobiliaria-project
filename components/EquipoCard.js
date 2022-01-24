import React from 'react'
import { PortableText, urlFor } from "../lib/sanity";

const EquipoCard = (props) => {
    return (
        <React.Fragment>
        <div className='w-1/2 sm:w-1/4 mx-auto  p-4 rounded-2xl border  shadow'>
            <img src={urlFor(props.image).url()} alt={props.name} className='md:rounded-full rounded-lg mb-6 md:w-36 mx-auto'/>
           <div className=''>
           <h2 className='text-base sm:text-xl text-white mb-4 font-bold text-center'>{props.name}</h2>
            <p className=' text-sm text-justify   text-white sm:text-center'><PortableText blocks={props?.descripcion} /></p>
           </div>
        </div>
        <style>{`
        .shadow{
            // box-shadow: 0 50px 100px -50px rgb(255 255 255/ 25%), 0 30px 60px -30px rgb(255 255 255 / 25%);
        }
        `}</style>
        </React.Fragment>
    )
}

export default EquipoCard
