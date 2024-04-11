import profileImage from "../../assets/profile-photo.png";
import Button from "../common/Button";
import Social from "../common/Social";

export default function Home() {
  return (
    <div className="">
      <img className="" src={profileImage} alt="" />
      <div>
        <h3 className="">
          {`Hola!, `}
          <span className="">{`soy Juan Velez`}</span>
        </h3>
        <p className="">
          {`Desarrollador web, `} <span className="">{`FullStack`}</span>
        </p>
        <p className="">{`Tengo experiencia trabajando con JavaScript, TypeScript, React, Express, Nodejs, Nestjs así como en el manejo de bases de datos como, PostreSQL y MongoDB.`}</p>

        {/* Contact info */}
        <section className="">
          <Social />
          <Button />
        </section>
      </div>
    </div>
  );
}
