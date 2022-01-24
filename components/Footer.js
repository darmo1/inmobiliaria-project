import React from "react";
import Link from "next/link";
import Image from "next/image"
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg bg-customRed">
        <div className="w-9/12 h-full flex  flex-wrap  md:flex-nowrap items-center justify-between mx-auto ">
          <Link href="https://instagram.com/inmobiliariadonquijote">
            <a className="flex items-center" target={"_blank"} >
              <Image src="/instagram.png" alt="icon-instagram" width="50" height="50" />
              <div className="text-white font-semibold ml-2">@inmobiliariadonquijote</div>
            </a>
          </Link>
         <div className="flex my-4 md:my-2">
         <img src="https://img.icons8.com/dotty/80/000000/phone.png" className="w-12 bg-white rounded-2xl"/>
        <div className="text-white ml-4">
        <div> tel:  604 322 21 31  </div>
         <div>cel: 300 7064360</div>
        </div>
         </div>
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
