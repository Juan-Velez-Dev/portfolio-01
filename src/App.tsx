import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/nav-bar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
