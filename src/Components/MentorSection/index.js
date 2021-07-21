import React from "react";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import {
  CardLayer,
  CardLayer2,
  MentorCard,
  MentorH1,
  MentorH2,
  MentorWrapper,
  MentorContainer,
  MentorImg,
  Img,
  MentorInfo,
  MentorContents,
  MentorSpan,
  SocialIconsContainer,
  SocialIcons,
} from "./MentorElements";
import Solo from "../../Images/Solo2.jpg";
import Ben from "../../Images/ben2.jpg";
import Derrick from "../../Images/derrick2.jpg";
import Carousel from "react-elastic-carousel";

const MentorSection = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <MentorContainer id="whoweare">
      <MentorH1>Meet your mentors</MentorH1>
      <Carousel breakPoints={breakpoints}>
        <CardLayer2>
          <MentorWrapper>
            <MentorCard>
              <CardLayer></CardLayer>

              <MentorImg>
                <Img src={Solo} />
              </MentorImg>
              <MentorContents>
                <MentorInfo>
                  <MentorH2>
                    Solomon
                    <br />
                    <MentorSpan>Js + Web instructor</MentorSpan>
                  </MentorH2>
                  <SocialIconsContainer>
                    <SocialIcons href="https://solo-stack.web.app/">
                      <FaGlobe />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/solomon-talemwa-3b823120a/">
                      <FaLinkedinIn />
                    </SocialIcons>
                    <SocialIcons href="https://twitter.com/tmsolomon11">
                      <FaTwitter />
                    </SocialIcons>
                  </SocialIconsContainer>
                </MentorInfo>
              </MentorContents>
            </MentorCard>
          </MentorWrapper>
        </CardLayer2>

        <CardLayer2>
          <MentorWrapper>
            <MentorCard>
              <CardLayer></CardLayer>

              <MentorImg>
                <Img src={Ben} />
              </MentorImg>
              <MentorContents>
                <MentorInfo>
                  <MentorH2>
                    Benjamin Namanya
                    <br />
                    <MentorSpan>C instuctor</MentorSpan>
                  </MentorH2>
                  <SocialIconsContainer>
                    <SocialIcons
                      onClick={() =>
                        (window.location = "mailto:gbenjaminkemi@gmail.com")
                      }
                    >
                      <AiFillMail />
                    </SocialIcons>
                  </SocialIconsContainer>
                </MentorInfo>
              </MentorContents>
            </MentorCard>
          </MentorWrapper>
        </CardLayer2>

        <CardLayer2>
          <MentorWrapper>
            <MentorCard>
              <CardLayer></CardLayer>

              <MentorImg>
                <Img src={Derrick} />
              </MentorImg>
              <MentorContents>
                <MentorInfo>
                  <MentorH2>
                    Derrick Mugisha
                    <br />
                    <MentorSpan>Python + Web Instructor</MentorSpan>
                  </MentorH2>
                  <SocialIconsContainer>
                    <SocialIcons href="https://www.facebook.com/mugisha.derrick.3">
                      <FaFacebookSquare />
                    </SocialIcons>
                  </SocialIconsContainer>
                </MentorInfo>
              </MentorContents>
            </MentorCard>
          </MentorWrapper>
        </CardLayer2>
      </Carousel>
    </MentorContainer>
  );
};
export default MentorSection;
