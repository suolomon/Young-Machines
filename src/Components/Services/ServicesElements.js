import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 250px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  margin-top: 40px;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 2rem;
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 25px;
`;
export const ServicesP2 = styled.p`
  font-size: 1rem;
  text-align: flex-start;
  color: #fff;
  max-width: 800px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-width: 600px;
    margin-bottom: 40px;
    line-height: 25px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    max-width: 320px;
    margin-bottom: 40px;
    line-height: 25px;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    font-size: 1rem;
    max-width: 300px;
    margin-bottom: 40px;
    line-height: 25px;
    text-align: center;
  }
`;

export const ServicesButton = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#010606 " : "#01bf71")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : " #010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  margin-top: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;
