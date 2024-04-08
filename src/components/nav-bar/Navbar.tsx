import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import menuImage from "../../assets/menu-burger.svg";
import closeImage from "../../assets/menu-x.svg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [burguer, setBurguer] = useState(true);
  const location = useLocation();
  const menuRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: unknown }) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setBurguer(true);
      }
    };

    // Agregar el event listener cuando el menú esté abierto
    if (!burguer) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Eliminar el event listener cuando el menú esté cerrado
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burguer]);

  const handleBurguerMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBurguer(!burguer);
  };

  return (
    <nav className="bg-bg-nav h-16 shadow-sm rounded-xl mt-4 w-[70%] m-auto grid grid-flow-col justify-between items-center">
      {/* ----- Logo in NavBar -----  */}
      <section className="pl-6 text-white-app">
        <p className="text-2xl font-bold">{`Juan Velez`}</p>
      </section>

      {/* ----- Menu Hamburguer -----  */}
      <div className="pr-6 grid justify-center w-24 lg:hidden">
        <a
          onClick={handleBurguerMenu}
          href="#"
          ref={menuRef}
          className="transition-all active:translate-x-1 active:rotate-90"
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
        <motion.ul
          initial={{ opacity: 0, scale: 0, y: "-50%" }}
          animate={{
            opacity: !burguer ? 1 : 0,
            scale: !burguer ? 1 : 0,
            y: !burguer ? "0%" : "-50%",
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: "-50%",
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-bg-app z-50 bg-opacity-55 list-none h-96 items-center fixed top-28 left-0  w-full flex flex-col justify-center text-5xl gap-10 lg:hidden"
        >
          <li>
            <NavLink
              to={"/aboutme"}
              className={
                location.pathname === "aboutme"
                  ? "text-white-app"
                  : "text-yellow-app hover:text-white-app"
              }
            >{`Sobre mí`}</NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={
                location.pathname === "projects"
                  ? "text-white-app"
                  : "text-yellow-app hover:text-white-app"
              }
            >{`Proyectos`}</NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={
                location.pathname === "/"
                  ? "text-white-app drop-shadow-lg underline"
                  : "text-yellow-app hover:text-white-app"
              }
            >{`Inicio`}</NavLink>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
