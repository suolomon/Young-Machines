import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";

const toggleHome = () => {
  scroll.scrollToTop();
};
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
             Young+Machines
            </SocialLogo>
            <WebsiteRights>
              Young+Machines &copy; {new Date().getFullYear()}
              &nbsp; All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
