import React from 'react'
import { urlFor } from '../lib/next-sanity.config';
import Image from 'next/image'

const CardHouses = ({card, detalles}) => {

    function renderStart( value ){
        switch( value ){
            case 1:
                return <div className="text-sm ml-2">  ⭐☆☆☆☆ </div>
            case 2:
                return <div className="text-sm ml-2" ml-2>  ⭐⭐☆☆☆ </div>
            case 3:
                return <div className="text-sm ml-2">  ⭐⭐⭐☆☆ </div>
            case 4:
                return <div className="text-sm ml-2">  ⭐⭐⭐⭐☆ </div>
            case 5:
                return <div className="text-sm ml-2">  ⭐⭐⭐⭐⭐ </div>
            
        }
    }

    return (
        
            <div className="bg-white p-4 rounded-lg mx-4 min-h-full flex flex-col">
             <div>
                 <img
                 alt="houses" 
                 //src={`${urlFor(card?.image)}` } 
                 src={card?.image } 
                 className="rounded-lg md:h-48  mx-auto h-22"
                 />
             </div>

             <div class="grow flex flex-col">
                 <h1 className="text-xl text-gray-600 font-semibold my-2">{ card.name} </h1>
                 <div className=" flex text-sm"> Valoracion: { renderStart(card.valoracion) } </div>
                <div className="w-4/5 mb-4 grow">
                    { card?.habitaciones && <span className="text-sm flex my-2 items-center">
                        <img 
                        src="/habitacion.svg"
                         alt="habitaciones" 
                         className="w-6 mr-2"
                         />
                        {card.habitaciones} Habitaciones
                    </span>}
                   { card?.cocinas && <span className="text-sm flex my-2 items-center">
                        <img 
                        src="/cocina.svg"
                         alt="habitaciones" 
                         className="w-6 mr-2"/>
                        {card.habitaciones === 1 ? (`${card.cocinas} cocina`) : (`${card.cocinas} cocinas`) } 
                    </span>}
                   { card?.bathroom && <span className="text-sm flex my-2 items-center">
                        <img 
                        src="/bathroom.svg"
                         alt="habitaciones" 
                         className="w-6 mr-2"/>
                        {card.habitaciones === 1 ? (`${card.bathroom} baño`) : (`${card.bathroom} baños`) }
                    </span>}
                   { card?.parqueadero && <span className="text-sm flex items-center my-2">
                        
                        {card.parqueadero && 
                        <span className="flex">
                             <img 
                        src="/parqueadero.svg"
                         alt="parqueadero" 
                         className="w-6 mr-2"
                         />
                        parqueadero

                        </span>
                        } 
                    </span>}
                    { card.piscina &&
                    <span className="text-sm flex items-center my-2">
                        <img 
                        src="/piscina.svg"
                         alt="piscina" 
                         className="w-6 mr-2"/>
                         Piscina
                    </span>}
                    {card?.address && <span className="text-sm flex items-center my-2">
                        <img 
                        src="/gps.svg"
                         alt="direccion" 
                         className="w-6 mr-2"/>
                        {card.address}
                    </span>}
                    
                    </div>  
                   {card?.price && <div className="font-semibold flex ">
                        Desde: {card.price}
                    </div>}
             </div>

             <div>
                 {detalles}
             </div>

             <style jsx>{`
             
             span img{
                 width: 20px;
             }
             `}</style>
        </div>

    )
}

export default CardHouses
