import profileImage from "../../assets/Profile-photo.png";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Social from "../common/Social";

export default function Home() {
  return (
    <motion.div>
      <img className="w-16 md:w-32 lg:w-48" src={profileImage} alt="" />
      <h3>{`Hola!, soy Juan Velez`}</h3>
      <p>{`Desarrollador web FullStack`}</p>
      <p>{`Tengo experiencia trabajando con JavaScript, TypeScript, React, Express, Nodejs, Nestjs así como en el manejo de bases de datos como, PostreSQL y MongoDB.`}</p>
      <Social />
      <Button />
    </motion.div>
  );
}
