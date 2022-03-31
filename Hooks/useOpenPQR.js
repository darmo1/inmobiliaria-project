import React from "react";

const useOpenPQR = ( PQRS, setPQRS) => {

  const handleClick = (e, id) => {
    
    const data = PQRS.map( item => {
         if( item._id === id){
           item.isOpen = !item.isOpen
           return  {...item}
         }else{
          item.isOpen = false
          return { ...item}
         }
    })

    setPQRS( data )

  };

  return handleClick;
};

export default useOpenPQR;
