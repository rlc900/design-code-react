import React from 'react';
import styled, { keyframes } from 'styled-components';
// import {ReacComponent as GithubLogo} from '../../../static/images/icons/github-logo.png';
import {menuData} from '../../data/MenuData'
import MockUpAnimation from '../animations/MockupAnimation';
import WaveBackground from '../backgrounds/WaveBackground';
import PurchaseButton from '../buttons/PurchaseButton';
import { themes } from '../styles/ColorStyles';
import { H1, P } from '../styles/TextStyles';


function HeroSection() {
    return (
      <Wrapper>
        <WaveBackground/>
        <ContentWrapper>
          <TextWrapper>
            <Title>Rianna Cleary<br /> <span>Full Stack Developer</span></Title>
             <Description>weeb</Description>
             <GithubIcon/>
             <PurchaseButton title="Start Learning" subtitle="120+ hours of video"/>
          </TextWrapper>
          <MockUpAnimation/>
        </ContentWrapper>
      </Wrapper>
    )
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px);}
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  height: 100vh;
	max-width: 1234px;
  margin: 0 auto;
	padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
  }

  @media (max-width: 450px) {
        font-size: 48px;
    }
`

const Description = styled(P)`
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  bottom: 80px;
`
const GithubIcon = styled.img`

`