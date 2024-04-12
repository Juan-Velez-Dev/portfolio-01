import profileImage from "../../assets/profile-photo.png";
import Button from "../common/button/Button";
import Social from "../common/Social";
import { buttonTexts } from "../common/button/button-string/button-string";

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
          <div className="flex items-center justify-center ">
            <Button buttonString={buttonTexts.contact} />
          </div>
        </section>
      </div>
    </div>
  );
}
