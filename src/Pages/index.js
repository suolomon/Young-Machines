import React, { useState } from "react";
import {
  Navbar,
  Sidebar,
  HeroSection,
  InfoSection,
  Services,
  Footer,
} from "../Components";
import { homeObjOne } from "../Components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(toggle);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
