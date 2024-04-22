import xIcon from "../../assets/x-icon-nav.svg";
import menuIcon from "../../assets/menu-icon-nav.svg";
import { showHamburguerMenu } from "./utils/showHamburguerMenu";
import { useLocation } from "react-router-dom";
import { pathNameText } from "./types/nav-types";
import { useState } from "react";
export default function HamburguerMenu() {
  const location = useLocation();
  const [hamburguerMenu, setHamburguerMenu] = useState(true);
  return (
    <div>
      <button
        className="transition-all duration-100 active:rotate-45 rounded-sm"
        onClick={() => showHamburguerMenu(hamburguerMenu, setHamburguerMenu)}
      >
        {hamburguerMenu ? (
          <img src={menuIcon} alt="" />
        ) : (
          <img src={xIcon} alt="" />
        )}
      </button>
      <div className="absolute left-10 top-16 text-center w-[80%] ">
        <ul
          className={
            "relative grid grid-flow-row p-9 gap-5 bg-bg-black opacity-80 font-fira-code text-text-yellow text-3xl " +
            (hamburguerMenu === true ? "hidden" : "visible")
          }
        >
          <li
            className={
              location.pathname === pathNameText.home
                ? "text-text-white underline"
                : ""
            }
          >
            {"Inicio"}
          </li>
          <li
            className={
              location.pathname === pathNameText.experience
                ? "text-text-white underline"
                : " " + "line-through"
            }
          >
            {"Experiencia"}
          </li>
          <li
            className={
              location.pathname === pathNameText.projects
                ? "text-text-white underline"
                : " " + "line-through"
            }
          >
            {"Proyectos"}
          </li>
          <li
            className={
              location.pathname === pathNameText.aboutme
                ? "text-text-white underline"
                : " " + "line-through"
            }
          >
            {"Sobre mí"}
          </li>
        </ul>
      </div>
    </div>
  );
}
