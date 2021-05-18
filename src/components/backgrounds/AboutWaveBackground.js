import React from 'react'
import styled from 'styled-components'
import WaveBackground from './WaveBackground'
import {H1, P} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'

export default function AboutWaveBackground() {
    return (
        <Wrapper>
         <WaveBackground/>
         <Title>About Me</Title>
         <Description>Blah Blah</Description>
        </Wrapper>
    ) 
}


const Wrapper = styled.div`
    position: relative;
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
`