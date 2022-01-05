import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg bg-customRed">
        <div className="w-9/12 h-full flex  flex-wrap  md:flex-nowrap items-center justify-between mx-auto ">
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
          background: #5e0817;
          height: 100px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
