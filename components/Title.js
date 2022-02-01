import { useRouter } from "next/router";
import React from "react";

const Title = (props) => {
 

  const title = function (pathname, name = undefined) {
    switch (pathname) {
      case "/servicios":
        return "Servicios";

      case "/propiedades":
        return "Propiedades";

      case "/blog":
        return "Blog";

        case "/nosotros":
        return "Nosotros";

        case "/contacto":
        return "Contacto";

      default:
        return `${name || ''}`;
    }
  };

  return (
    <div className="max-w-4xl flex my-16 mx-auto mb-28 justify-center items-center">
      <p className="text-5xl "> {title(props.pathname, props.name)} </p>
    </div>
  );
};

export default Title;
