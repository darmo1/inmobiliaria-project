import React from 'react'

const ContainerService = ({children}) => {
    return (
        <section>
            <ul className="block lg:flex lg:max-w-4xl mx-auto ">
                {children}
            </ul>
        </section>
    )
}

export default ContainerService
