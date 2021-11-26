import React from 'react'
import Link from 'next/link'

export const BannerPromo = (props) => {
    return (
        <div className='max-w-4xl rounded-lg  my-4  max-h-80 mb-4 mx-auto  md:h-80 sm:flex  md:grid md:grid-cols-banner'>
            <div className={` rounded-l-lg col-start-1  ${props.background || 'bg-bannerColor'}`}>
                <div className=' p-4 w-3/4 mx-auto h-full flex flex-col justify-center ' >
                    <h1 className='text-4xl text-white'>Kit promocional  </h1>
                    <p className='my-4 text-gray-900'> Te damos 40% de descuento en el primer año, lorem ipsu , lorem ipsu <small className='text-xs'>Aplica terminos y condiciones</small>   </p>
                    <Link href="https://api.whatsapp.com/send?phone=573116703825">
                    <button className='flex w-max rounded-lg font-semibold bg-yellow-400 py-1 px-3 hover:bg-blue-400'>Quiero la promoción</button>
                    </Link>
                </div>
            </div>
            <div 

            className="col-start-2 bg-no-repeat bg-cover bg-center rounded-r-lg" 
            style={{ 
                backgroundImage:`url(${props.image || '/banner1.jpg'} )`,
                }}>
                
            </div>


           
        </div>
    )
}
