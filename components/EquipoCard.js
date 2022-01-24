import React from 'react'
import { PortableText, urlFor } from "../lib/sanity";

const EquipoCard = (props) => {
    return (
        <React.Fragment>
        <div className='w-2/3 md:w-1/4 mb-4 mx-2 py-4 px-2 rounded-2xl border  shadow'>
            <img src={urlFor(props.image).url()} alt={props.name} className='md:rounded-2xl rounded-lg mb-6 md:w-36  md:h-36  w-28 h-28  mx-auto'/>
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
