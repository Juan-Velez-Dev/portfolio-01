import profileImage from "../../assets/profile-photo.png";
import Button from "../common/Button";
import Social from "../common/Social";

export default function Home() {
  return (
    <div className="pt-24 text-center">
      <img className="w-[63%] max-w-md m-auto" src={profileImage} alt="" />
      <h3 className="pt-3 text-4xl md:text-5xl font-bold">
        {`Hola!, `}
        <span className="text-yellow-app font-semibold">{`soy Juan Velez`}</span>
      </h3>
      <p className="pt-4 text-yellow-app text-2xl md:text-3xl">
        {`Desarrollador web, `}{" "}
        <span className="text-white-app">{`FullStack`}</span>
      </p>
      <p className="pt-4 text-md text-pretty px-4 md:text-2xl">{`Tengo experiencia trabajando con JavaScript, TypeScript, React, Express, Nodejs, Nestjs así como en el manejo de bases de datos como, PostreSQL y MongoDB.`}</p>

      {/* Contact info */}
      <section className="pt-9 grid grid-flow-row gap-6  ">
        <Social />
        <Button />
      </section>
    </div>
  );
}
