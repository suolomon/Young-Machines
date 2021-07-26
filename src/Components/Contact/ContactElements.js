import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  z-index: 1;
  height: 100vh;
  position:relative ;
   @media screen and (max-width: 400px) {
    overflow: scroll;
    height: 100vh;
  } 
`;

export const FormWrap = styled.div`
  
`;

export const FormBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    height: 100vh;
  }
`;

export const ImageBg = styled.image`

  :before {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
     z-index: 1;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  } ;
`;

export const IconLogldiv = styled.div`
  text-align: center;
`
export const NavContact = styled.div`
  background: transparent;
  height: 80px;
  margin-top: -37px;
  flex-wrap: wrap;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const NavContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

export const IconLogo = styled.h1`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480pxpx) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 360pxpx) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 280pxpx) {
    font-size: .9rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  } ;
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  max-width: 600px;
  position: absolute;
  width: 85%;
  z-index: 1;
  border-radius: 8px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 40px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    top: 54%;
   
  }
`;
export const FormH1 = styled.h1`
`;

export const FormH2 = styled.h2`
 font-size: 2rem;
 margin-bottom: 5px;
`
export const FormSection = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
`

export const Section = styled.div``

export const IconButton = styled.button`
 width: 20px;
 margin-right: 5px;
 margin-bottom: 2px;
 border: none;
 border-radius: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #fff;
  }
`;

export const FormLabel = styled.label`
  /* margin-bottom: 8px; */
  display: block;
  text-align: left;
  font-size: 14px;
  color: #fff;
`;


export const TextBorder = styled.div`
 border: 1px solid black;
 margin: 8px 0;
 padding: 12px 18px;
 border-radius: 8px;
`
export const FormInput = styled.input`
  width: 100%;
  padding: 16px 16px;
  margin-bottom: 32px;
  margin-top: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export  const SelectTag = styled.select`
  width: 100%;
  border: none;
  outline: none;
  margin-top: 6px;
  border-radius: 4px;
  margin-bottom: 32px;
  font-size: 14px;
  height: 50px;
`;
export const TextAreaLabel = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 32px;
  font-size: 14px;
  height: 100px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 100%;


   &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #fff;
  } 
  :disabled {
    background: grey;
    color:#fff;
    cursor: not-allowed;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const FormP = styled.p`
`

export const ErrorTag = styled.p`
 font-size: 14px;
 color: orange;
 margin-top: -20px;
 margin-bottom: 10px;
`

export const RequiredTag = styled.span`
 color: red;
`