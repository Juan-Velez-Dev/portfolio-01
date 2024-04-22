import HamburguerMenu from "./HamburguerMenu";
export default function Navbar() {
  //! El hijo es el absolute position
  return (
    <nav className="grid grid-flow-col pl-7 h-16 pr-7 shadow-md content-center justify-items-center bg-bg-gray bg-bg-nav justify-between rounded-b-md m-auto">
      {/* ----- Logo in NavBar -----  */}

      <p className="text-text-white text-xl font-jet-brains-extrabold tracking-widest p-3">{`Juan Velez`}</p>
      {/* ----- Menu Hamburguer -----  */}
      <div className="pt-2">
        <HamburguerMenu />
      </div>
    </nav>
  );
}
