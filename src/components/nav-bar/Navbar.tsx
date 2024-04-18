import xIcon from "../../assets/x-icon-nav.svg";
import menuIcon from "../../assets/menu-icon-nav.svg";
import { useState } from "react";
import { showHamburguerMenu } from "./utils/showHamburguerMenu";
export default function Navbar() {
  const [hamburguerMenu, setHamburguerMenu] = useState(true);
  //! El hijo es el absolute position
  return (
    <nav className="grid m- shadow-md content-center justify-items-center bg-bg-gray bg-bg-nav justify-between  rounded-b-md m-auto">
      {/* ----- Logo in NavBar -----  */}

      <p className="text-text-white font-jet-brains-extrabold tracking-widest p-3">{`Juan Velez`}</p>
      <button
        onClick={() => showHamburguerMenu(hamburguerMenu, setHamburguerMenu)}
      >
        {hamburguerMenu ? (
          <img src={menuIcon} alt="" />
        ) : (
          <img src={xIcon} alt="" />
        )}
      </button>
      <div className="absolute top-24 text-center bg-btn-yellow w-[75%] ">
        <ul className="relative text-text-white hover:text-text-yellow hover:cursor-pointer hover:underline">
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Sobre mi</li>
        </ul>
      </div>

      {/* ----- Menu Hamburguer -----  */}
    </nav>
  );
}
