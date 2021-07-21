import styled from "styled-components";

export const MentorContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  /* position: relative; */

  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const MentorWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr; */
  justify-content: center;
  align-items: center;
  /* grid-gap: 16px; */
  padding: 0 50px;
  /* position: relative; */

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }
  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    padding: 0 20px;
  }
`;

export const CardLayer = styled.div`
  z-index: 1;
  position: absolute;
  top: calc(100% - 2px);
  height: 100%;
  width: 100%;
  left: 0;
  background: linear-gradient(to left, orange, tomato);
  transition: 0.5s;

  &:hover {
    top: 0;
  }
`;

export const CardLayer2 = styled.div`
  width: 350px;
  margin: 0 auto;
  background: #333;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
`;
export const MentorCard = styled.div`

`;

export const MentorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const MentorImg = styled.div`
  z-index: 2;
  position: relative;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

export const MentorContents = styled.div`
  z-index: 2;
  position: relative;
`;
export const MentorSpan = styled.div`
  font-size: 15px;
  color: #fff;
  margin-top: 5px;
  transition: 0.5s;

  &:hover {
    color: white;
    position: relative;
  }
`;

export const SocialIconsContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 5px;
`;
export const SocialIcons = styled.a`
  list-style: none;
  margin: 4px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #294d69;
  border-radius: 50%;
  font-size: 1.5em;
  color: #fff;
  transition: 0.5s;

  &:hover {
    transform: rotate(360deg);
    background: #03a9f4;
  }
`;

export const MentorIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const MentorH1 = styled.h1`
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
    /* margin-top: 250px; */
  }
`;

export const MentorH2 = styled.h2`
  font-size: 18px;
  color: #fff;
`;

export const MentorP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 25px;
`;
export const MentorP2 = styled.p`
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
