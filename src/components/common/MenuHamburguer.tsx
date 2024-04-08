import { motion } from "framer-motion";
import { useState } from "react";
import menuImage from "../../assets/menu-burger.svg";
import closeImage from "../../assets/menu-x.svg";
import { NavLink } from "react-router-dom";

export default function MenuHamburguer() {
  const [burguer, setBurguer] = useState(true);
  const handleBurguerMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBurguer(!burguer);
  };
  return (
    <div>
      <div className="pr-6 grid justify-center w-24 lg:hidden">
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
        className="bg-bg-app bg-opacity-55 list-none h-96 items-center fixed top-16 left-3  flex flex-col justify-center text-5xl gap-10 lg:hidden"
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
            // onClick={}
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
    </div>
  );
}
