import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { motion } from "framer-motion";
import Navbar from "./components/nav-bar/Navbar";
import { useEffect, useState } from "react";
import Error from "./components/error/Error";

function App() {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateIn(true);
    }, 500);
    9898;
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={animateIn ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed w-full justify-center">
        <Navbar />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </motion.main>
  );
}

export default App;
