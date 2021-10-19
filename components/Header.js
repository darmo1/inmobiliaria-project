import * as React from "react";
import { menuNavBar } from "../Utils/menuNavBar";
import Link from "next/link";
import useWindowSize from "../Hooks/useWindowSize";
import Banner from "./Banner";
import Image from "next/image";
import { useRouter } from "next/router";
import Title from "./Title";

const Header = () => {
  const { pathname } = useRouter();
  const { width } = useWindowSize();

  const [showMenu, setShowMenu] = React.useState(false);

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
            <div className=" bg-purpleLight rounded-r-lg flex justify-center items-center w-1/6">
            <Image
              src="/menuIcon.svg"
              alt="Icono-mobile"
              width="50"
              height="35"
            className=" "
            />
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
          <div className="flex justify-center">
            <a>
              <Image
                src="/logo.svg"
                alt="logo"
                width="150"
                height="150"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-balls">
          <header className="max-w-4xl mx-auto text-white text-right p-6">
            <Link href="/nosotros">
              <a>Quienes somos</a>
            </Link>
          </header>
          <div className="bg-purple">
            <nav className="max-w-5xl mx-auto flex md:justify-between  ">
              <Link href={"/"}>
                <a>
                  <Image src="/logo.svg" alt="logo" width="100" height="100" />
                </a>
              </Link>

              <ul className="md:flex md:w-3/4 md:justify-evenly items-center">
                {menuNavBar.map((item) => {
                  return (
                    <Link href={item.url} key={item.id}>
                      <a>
                        <li className={`${item.itemClassName} text-black`}>
                          {item.itemName}
                        </li>
                      </a>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          {pathname === "/" ? <Banner /> : <Title pathname={pathname} />}
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
          background-image: url("/balls.svg");
          min-height: 700px;
          repeat: no-repeat;
          background-size: cover;
          background-position: top;
          position: relative;
        }

        li:after {
          content: "|";
          margin-left: 2rem;
        }

        .lst::after {
          content: none;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Header;
