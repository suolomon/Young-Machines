import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InfoContainer, 
    InfoRow, 
    InfoWrapper,
    Column1, 
    Column2, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    BtnWrap,
    Img,
    ImgWrap 
} from './InfoElements'

const InfoSection = ({
    id, 
    lightBg, 
    imgStart, 
    description, 
    lightText, 
    darkText, 
    headline, 
    buttonLabel,
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
          <InfoContainer id={id}>
              <InfoWrapper lightBg={lightBg}>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1: 0}
                              dark2={dark2 ? 1: 0}
                              >{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <Img src={img} alt={alt}/>
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
