import profileImage from "../../assets/profile-photo.png";
import Button from "../common/Button";
import Social from "../common/Social";

export default function Home() {
  return (
    <div className=" text-center lg:flex md:flex-col xl:flex xl:flex-row-reverse xl:gap-9 p-28 bg-bg-nav w-[85%] relative top-20 m-auto rounded-xl shadow-lg   ">
      <img className="w-[63%] max-w-md m-auto" src={profileImage} alt="" />
      <div>
        <h3 className="pt-3 text-4xl md:text-5xl font-bold xl:text-left">
          {`Hola!, `}
          <span className="text-yellow-app font-semibold">{`soy Juan Velez`}</span>
        </h3>
        <p className="pt-4 text-yellow-app text-2xl md:text-3xl xl:text-left">
          {`Desarrollador web, `}{" "}
          <span className="text-white-app">{`FullStack`}</span>
        </p>
        <p className="pt-4 text-md text-pretty md:text-2xl xl:text-left">{`Tengo experiencia trabajando con JavaScript, TypeScript, React, Express, Nodejs, Nestjs así como en el manejo de bases de datos como, PostreSQL y MongoDB.`}</p>

        {/* Contact info */}
        <section className="pt-9 grid grid-flow-row gap-6 xl:grid-flow-col xl:justify-start xl:gap-14 ">
          <Social />
          <Button />
        </section>
      </div>
    </div>
  );
}
