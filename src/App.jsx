import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Intro from "./components/Intro";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 4000);
  }, []);

  return showIntro ? (
    <Intro />
  ) : (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;