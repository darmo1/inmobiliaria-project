import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <div className="bg">
            Header
            </div>
            <style jsx>{`
            .bg{
                background-image: url("/waves.svg");
                height: 300px;
                repeat: no-repeat;
                background-size: cover;
                background-position: top;
            
            }
            
            `}</style>

        </React.Fragment>
        
    )
}

export default Header
