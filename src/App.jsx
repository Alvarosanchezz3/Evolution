import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact"; // Importa el componente Contact
import Page404 from "./components/Page404/Page404";
import Explore from "./components/Explore/Explore";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <Router defaultComponent={Navbar} >
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Hero
                  heroData={heroData[heroCount]}
                  setPlayStatus={setPlayStatus}
                  setHeroCount={setHeroCount}
                  heroCount={heroCount}
                  playStatus={playStatus}
                />
              </>
            }
          />
          <Route 
            path="/contact" 
            element={
            <>
              <Navbar />
              <Contact />
            </>
          }
          />
          <Route 
            path="/explore" 
            element={
            <>
              <Navbar />
              <Explore />
            </>
          }
          />
          <Route path="*" element={<Page404 />} /> {/* Página para ruta no encontrada */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;