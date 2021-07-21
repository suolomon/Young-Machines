import React, { useState } from "react";
import Video from "../../Video/Videopavel.mp4";
import Typewriter from "typewriter-effect";

import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  StartButton,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("We teach you to solve")
                .pauseFor(2000)
                .deleteChars(5)
              typewriter.typeString("develope").pauseFor(2000)
              .deleteChars(11)
              .typeString('the future').pauseFor(1000).start()
            }}
            options={{
              autoStart: true,
              // loop: true, 
      
            }}
          
          />
        </HeroH1>
        <HeroP>
          Our robust community gives you the skill sets you need in
          software development. 
        </HeroP>
        <HeroBtnWrapper>
          <StartButton
            to="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </StartButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
