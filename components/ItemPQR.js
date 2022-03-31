import React from "react";
import Link from "next/link";
import useOpenPQR from "../Hooks/useOpenPQR";

const ItemPQR = ({ id, title, slug, description, PQRS, setPQRS }) => {
  const handleClick = useOpenPQR(PQRS, setPQRS);

  return (
    <div className="py-1">
      <div className="flex justify-between ">
        {/* <Link href={`/${slug}`}>
          <a> */}
            <h1 className="font-bold">{title}</h1>
          {/* </a>
        </Link> */}
        <button 
        type="button" 
        className="flex"
        onClick={(e) => handleClick(e, id)}>
        {PQRS.filter(({ _id }) => _id === id).map(({ isOpen }) =>
        !isOpen ? <p className="text-customRed font-bold"> + </p> : <div className="text-customRed font-bold"> - </div>
      )}
        </button>
      </div>
      {PQRS.filter(({ _id }) => _id === id).map(({ isOpen }) =>
        isOpen ? <p className=" py-2 text-justify"> {description} </p> : null
      )}
    </div>
  );
};

export default ItemPQR;
