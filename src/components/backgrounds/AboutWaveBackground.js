import React from 'react'
import styled, { keyframes } from 'styled-components'
import WaveBackground from './WaveBackground'
import {H1, P} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'

export default function AboutWaveBackground() {
    return (
        <Wrapper>
         <WaveBackground/>
         <Title><span>About Me</span></Title>
         <Description>
             <span>
                About me will go here
             </span>
         </Description>
        </Wrapper>
    ) 
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px);}
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Wrapper = styled.div`

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
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
  }

  /* for accessibility */
  @media (max-width: 450px) {
        font-size: 48px;
    }
`
const Description = styled(P)`
   /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
   background: white;
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   /* position: relative; */
   bottom: 80px;
   
   span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
  }

/* for accessibility */
   @media (max-width: 450px) { 
        font-size: 48px;
    } 
`