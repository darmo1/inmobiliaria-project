import * as React from "react";
import { menuNavBar } from "../Utils/menuNavBar";
import Link from "next/link";
import useWindowSize from "../Hooks/useWindowSize";
import Banner from "./Banner";
import Image from "next/image";
import { useRouter } from "next/router";
import Title from "./Title";
import { BannerPromo } from "./BanerPromo";

const Header = () => {
  const { pathname } = useRouter();
  const { width } = useWindowSize();

  const [showMenu, setShowMenu] = React.useState(false);

  const arrayImage = [
    '/banner1.jpg',
    '/banner2.jpg',
    '/build.jpg',
  ]

  function imageRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const OpenMenu = () => {
    setShowMenu(!showMenu);
  };

  React.useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <React.Fragment>
      {width <= 640 ? (
        <div className="bg-waves  ">
          <div onClick={OpenMenu} className="relative pt-8 block">
            <div className=" bg-customRedLight rounded-r-lg flex justify-center items-center w-1/6 ">
            <Link href="/">
            <a>
            <Image
              src="/menuIcon.svg"
              alt="Icono-mobile"
              width="50"
              height="35"
            className=""
            />
            </a>
            </Link>
            </div>

            <div
              className={
                showMenu
                  ? "animationMenu left-0 border rounded-lg w-full bg-white absolute  z-10"
                  : "border rounded-lg w-full bg-white absolute -left-full z-10"
              }
            >
              <ul className="flex flex-col items-center">
                {menuNavBar.map((item) => {
                  return (
                    <Link href={item.url} key={item.id}>
                      <a>
                        <li
                          className={`${item.itemClassName} text-black my-4 hover:bg-purple`}
                        >
                          {item.itemName}
                        </li>
                      </a>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center ">
           <Link href="/">
             <div className="bg-white rounded-2xl p-4 flex flex-col items-center">
             <a>
             <div className="flex justify-center mb-1">
             <Image
                src="/LogoInmobiliariaDonQuijote.png"
                alt="logo"
                width="70"
                height="70"
                className=""
              />
             </div>
              <div className="flex flex-col items-center">
                    <p className="font-bold text-lg">Inmobiliaria</p>
                    <p className="font-bold text-lg">Don Quijote</p>
                  </div>
            </a>

             </div>
           </Link>
          </div>
        </div>
      ) : (
        <div className="bg-balls" style={ pathname === '/' ? { minHeight:'700px'} : {}}>
          <header className="max-w-4xl mx-auto text-white text-right p-6">
            {/* <Link href="/nosotros">
              <a>Quienes somos</a>
            </Link> */}
          </header>
          <div className="">
            <nav className="max-w-5xl mx-auto flex md:justify-between bg-customRed pr-8   rounded-2xl">
              <Link href={"/"}>
                <a>
                  <div className=" bg-white pr-4 pl-2 flex items-center rounded-l-xl">
                  <Image src="/LogoInmobiliariaDonQuijote.png" alt="logo" width="90" height="90" className="" />
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-lg">Inmobiliaria</p>
                    <p className="font-bold text-lg">Don Quijote</p>
                  </div>

                  </div>
                </a>
              </Link>

              <ul className="md:flex  md:justify-evenly items-center">
                {menuNavBar.map((item) => {
                  return (
                    <Link href={item.url} key={item.id}>
                      <a>
                        <li className={`${item.itemClassName} text-white`}>
                          {item.itemName}
                        </li>
                      </a>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          {pathname === "/" && <Banner /> 
          
          // <>  
          // <Title pathname={pathname} /> 
          //  <BannerPromo image={arrayImage[imageRandom(0, arrayImage.length-1)]} />    
          // </>
          }
        </div>
      )}
      <style jsx>{`
        .animationMenu {
        }

        .bg-waves {
          background-image: url("/waves.svg");
          height: 300px;
          repeat: no-repeat;
          background-size: cover;
          background-position: top;
        }

        .bg-balls {
          background-image: url("/headers.svg");
         
          repeat: no-repeat;
          background-size: cover;
          background-position: top;
          position: relative;
        }

        li:after {
          content: "|";
          margin-left: 1.5rem;
          padding: 0 1rem;
        }

        .lst::after {
          content: none;
        }

        
      `}</style>
    </React.Fragment>
  );
};

export default Header;
