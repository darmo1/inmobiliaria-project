import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg">
        <div className="w-9/12 h-full flex justify-between mx-auto">
          <Link href="/">
            <a>
              <div className="text-white font-semibold">@inmobiliariadonquijote</div>
            </a>
          </Link>
          <div className="text-white font-semibold">Medellin - Colombia</div>

        </div>
      </footer>
      <style jsx>{`
        .bg {
          background-image: linear-gradient(to right, #ae80f5, #6153d3);
          height: 100px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
