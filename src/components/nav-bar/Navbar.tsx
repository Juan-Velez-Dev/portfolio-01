import { useState } from "react";
import menuImage from "../../assets/menu-burger.svg";
import closeImage from "../../assets/menu-x.svg";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [burguer, setBurguer] = useState(true);
  const location = useLocation();

  const handleBurguerMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBurguer(!burguer);
  };

  return (
    <nav className="bg-bg-nav h-20 flex justify-between items-center">
      {/* ----- Logo in NavBar -----  */}

      <section className="flex flex-col text-2xl text-white-app font-JetBrains font-bold pl-6">
        <p className="">Juan</p>
        <p className="">Velez</p>
      </section>

      {/* ----- Menu Hamburguer -----  */}

      <div className="flex justify-center fixed w-16 left-[75%] md:left-[85%] lg:hidden">
        <a
          onClick={handleBurguerMenu}
          className="transition-all active:translate-x-1 active:rotate-90"
          href=""
        >
          {burguer ? (
            <img src={menuImage} alt="" />
          ) : (
            <img className="" src={closeImage} alt="" />
          )}
        </a>
      </div>

      {/* ----- List of the Menu -----  */}
      {!burguer && (
        <ul className="bg-bg-app bg-opacity-55 list-none h-80 text-center fixed top-20 w-screen flex flex-col justify-center text-5xl gap-10 lg:hidden">
          <li>
            <a
              className={
                location.pathname === "aboutme"
                  ? "text-white-app"
                  : "text-yellow-app hover:text-white-app"
              }
              href=""
            >{`Sobre mí`}</a>
          </li>
          <li>
            <a
              className={
                location.pathname === "projects"
                  ? "text-white-app"
                  : "text-yellow-app hover:text-white-app"
              }
              href=""
            >{`Proyectos`}</a>
          </li>
          <li>
            <a
              className={
                location.pathname === "/"
                  ? "text-white-app drop-shadow-lg"
                  : "text-yellow-app hover:text-white-app"
              }
              href=""
            >{`Inicio`}</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
