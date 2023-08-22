import React, { useEffect, useState } from "react";
// Components
import Me from "../components/Me";
import Info from "../components/Info";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";

const Home = () => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    if (window.innerWidth > 780) {
      setLength(3);
    } else if (window.innerWidth > 430) {
      setLength(2);
    } else if (window.innerWidth < 430) {
      setLength(1);
    }
  }, [window.innerWidth, length]);
  return (
    <>
      <Me />
      <Info />
      <Projects length={length} />
      <Experiences length={length} />
    </>
  );
};

export default Home;
