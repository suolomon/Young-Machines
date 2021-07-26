import React, { useState } from "react";
import {
  Navbar,
  Sidebar,
  HeroSection,
  MentorSection,  
  InfoSection,
  Services,
  Footer,
} from "../Components";
import { homeObj } from "../Components/InfoSection/Data";
import WhatWeDo from "../Components/WhatWeDoSection";
import { AboutObj } from "../Components/WhatWeDoSection/Data";

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
      <WhatWeDo {...AboutObj} />
      <MentorSection />
      <InfoSection {...homeObj} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
