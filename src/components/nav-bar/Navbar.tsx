import { useState } from "react";
import { NavLink } from "react-router-dom";
import menuImage from "../../assets/menu-icon-nav.svg";
import closeImage from "../../assets/x-icon-nav.svg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [burguer, setBurguer] = useState(true);
  const location = useLocation();

  const handleBurguerMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBurguer(!burguer);
  };

  return (
    <nav className="">
      {/* ----- Logo in NavBar -----  */}

      <section className="">
        <p className="">{`Juan Velez`}</p>
      </section>

      {/* ----- Menu Hamburguer -----  */}

      <div className="">
        <a onClick={handleBurguerMenu} className="" href="">
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
          className=""
        >
          <li>
            <NavLink
              onClick={handleBurguerMenu}
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
              onClick={handleBurguerMenu}
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
              onClick={handleBurguerMenu}
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
