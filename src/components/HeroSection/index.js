import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForword,ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {

  const[hover, setHover]= useState(false);
  const onHover=()=>{
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>SignUp for a new account today and receive Rs.300/- cash prize Download the app now.</HeroP>
          <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
            Get Started {hover ? < ArrowForword/>:<ArrowRight/>}
          </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
