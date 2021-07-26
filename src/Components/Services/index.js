import React from 'react'
import {AiFillPushpin} from 'react-icons/ai'
import {BiUpArrowCircle} from 'react-icons/bi'
import { 
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesContainer,
    ServicesButton,
    ServicesP,
    
 } from './ServicesElements'

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesH1>Popular courses</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <AiFillPushpin style={{ height: 80, width: 80 }} />
            <ServicesH2>Standalone</ServicesH2>
            <ServicesP>
              Includes one programing language (C, Python, JS) or Web
              development (HTML and CSS)
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <BiUpArrowCircle style={{ height: 80, width: 80 }} />
            <ServicesH2>Full Course</ServicesH2>
            <ServicesP>Includes everything in Standalone</ServicesP>
          </ServicesCard>

        </ServicesWrapper>
        <ServicesButton to="/contact">GET STARTED</ServicesButton>
      </ServicesContainer>
    );
}

export default Services
