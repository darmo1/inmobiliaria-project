import React from 'react'
import { menuNavBar } from '../Utils/menuNavBar'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className="bg  ">
                <header className="max-w-4xl mx-auto text-white text-right ">
                    Quienes somos
                </header>
                <nav className="max-w-4xl mx-auto flex md:justify-between">
                    <div>
                        <img src="" alt="logo" />
                    </div>

                    <ul className="md:flex md:w-3/4 md:justify-evenly">
                        {menuNavBar.map( item => {
                            return ( 
                             <Link href={item.url} key={item.id}>
                                 <a>
                                 <li  className={item.itemClassName}>
                                    {item.itemName}
                                </li>
                                 </a>
                             </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <style jsx>{`
            .bg{
                background-image: url("/waves.svg");
                height: 300px;
                repeat: no-repeat;
                background-size: cover;
                background-position: top;
            
            }

            li:after{
                content:"|";
                margin-left:2rem;
            }

            .lst::after {
                content:none;
            }
            
            `}</style>

        </React.Fragment>
        
    )
}

export default Header
