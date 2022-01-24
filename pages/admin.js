import React from 'react'
import LayoutSecundary from '../Layout/LayoutSecundary'
import Link from 'next/link'
function Admin(){
    return (
        <div className='max-2xl mx-auto'>
            <LayoutSecundary showBanner={true}>
                <div className='mx-auto flex flex-col items-center'>
                <div className='text-center text-2xl'>Click para ir al dashboard.</div>
                <p>
                Sanity io, solo para administradores
                </p>
               <Link href="https://www.sanity.io/login?origin=https%3A%2F%2Fwww.sanity.io%2Fmanage" >
               <a target="_blank">
               <button className='border px-6 py-2 bg-indigo-400 my-6 rounded-2xl text-2xl text-white font-semibold'>
                    Panel administrador
                </button>
               </a>
               </Link>
                <img src="/Discovery.gif" alt="gif" />
                </div>
            </LayoutSecundary>
        </div>
    )
}

export default Admin
