import React, {useState, useEffect} from 'react'
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    LogoH1,
    NavMenu, 
    MobileIcon, 
    NavLinks, 
    NavImg,
    NavItem, 
    NavBtn, 
    NavBtnLink
 } from './NavbarElements'
import { FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoH1>Young + Machines</LogoH1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  What we do
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Pricing
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">Register</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
}

export default Navbar
