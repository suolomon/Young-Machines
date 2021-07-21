import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import {SiPython, SiJavascript} from 'react-icons/si';
import { 
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesContainer,
    ServicesButton,
    ServicesP,
    ServicesP2
    
 } from './ServicesElements'
 import { Button } from '../ButtonElements';

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesH1>Popular courses</ServicesH1>
        {/* <ServicesP2>
          Y+M popular Standalone courses go for Ugx.360,000 for 4 weeks while
          the Full course goes for Ugx. Ugx.980,000 with flexible paying plans.
          All girls qualify for the SheCanCode program which offers them our
          Standalone course at Ugx.280,000 and Full course at Ugx. 720,000
          respectively.
        </ServicesP2> */}
        <ServicesWrapper>
          <ServicesCard>
            <SiPython style={{ height: 80, width: 80 }} />
            <ServicesH2>Python</ServicesH2>
            <ServicesP>Python fundementals, practical session + more</ServicesP>
            {/* <Button>Register</Button> */}
          </ServicesCard>

          <ServicesCard>
            <SiJavascript style={{ height: 80, width: 80 }} />
            <ServicesH2>JavaScript</ServicesH2>
            <ServicesP>JS fundementals, practical session + more</ServicesP>
            {/* <Button>Register</Button> */}
          </ServicesCard>

          <ServicesCard>
            <FaLaptopCode style={{ height: 90, width: 90 }} />
            <ServicesH2>Web development</ServicesH2>
            <ServicesP>Includes HTML + CSS + UI/UX Design</ServicesP>
            {/* <Button>Register</Button> */}
          </ServicesCard>
        </ServicesWrapper>
        <ServicesButton>GET STARTED</ServicesButton>
      </ServicesContainer>
    );
}

export default Services
