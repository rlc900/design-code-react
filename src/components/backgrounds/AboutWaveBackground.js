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
             Hi there! My name is Rianna Cleary and I am a full-stack web developer with an expertise in JavaScript, React, Ruby on Rails, HTML, CSS, Ruby, Rails, Git, SQL, Postgres, Bcrypt, Jest, Pair-programming, & Agile methodology. 
             While my main passion is coding and tech, I also love making music and DJing. I am based in NYC. 
             I started to code when I was 20, or during a time in my life where I had absolutely no clue what I wanted to pursue. 
             I had been into tech since I could remember, which started first with video games and gadgets. 
             Initially, I began learning on websites like Codecadamy and FreeCodeCamp and really fell in love with the problem-solving aspect of programming. 
             I knew this was the path I wanted to pursue so I enrolled into Flatiron School’s immersive software engineering program.  
             In my current role as a Software Engineering Coach at Flatiron School, I help and support students throughout their bootcamp journey by running code reviews, lectures, and design sprints. 
             I love the collaborative nature of my role and moving forward, I’d see myself in a similar environment: among other driven web developers with whom we work to attain bigger goals. 
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
   position: relative; 
   margin-left:auto;
   margin-right:auto;
   text-align:center;
   width: 500px; 
   font-size: 21px;
   top: 55px;
   
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