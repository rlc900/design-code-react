import React from 'react'
import styled, { keyframes } from 'styled-components'
// import WaveBackground from './WaveBackground'
import {H1, P} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'

export default function About() {
  
    return (
      <>
      <Title><span>About Me</span></Title>
        <Wrapper id="about">
          <Headshot className='child' src='/images/avatars/headshot.png'/>
          <Description className='child'>
             <span>
             Hi there! My name is Rianna Cleary and I am a full-stack web developer with an expertise in JavaScript, 
             React, Ruby on Rails, HTML, CSS, Ruby, 
             Rails, Git, SQL, Postgres, Bcrypt, Jest, Pair-programming, & Agile methodology. 
             <br></br>
             While my main passion is coding and tech, I also love making music and DJing. I am based in NYC. 
             I started to code when I was 20, or during a time in my life where I had absolutely no clue what I wanted to pursue. 
             I had been into tech since I could remember, which started first with video games and gadgets. 
             <br></br>
             Initially, I began learning on websites like Codecadamy and FreeCodeCamp and really fell in love with the problem-solving aspect of programming. 
             I knew this was the path I wanted to pursue so I enrolled into Flatiron School’s immersive software engineering program.  
             In my current role as a Software Engineering Coach at Flatiron School, I help and support students throughout their bootcamp journey by running code reviews, lectures, and design sprints.
             <br></br> 
             I love the collaborative nature of my role and moving forward, I’d see myself in a similar environment: among other driven web developers with whom we work to attain bigger goals. 
             </span>
         </Description>
        </Wrapper>
        </>
    ) 
}

const Wrapper = styled.div`
  // display: flex;
  height: 400px;
  // background: url('/images/animations/circle2.png');
    .child {
      flex: 1
    }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;

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
   background: white;
   background-clip: text;
   margin-top: 20px;
   -webkit-background-clip: text;
   color: transparent;

   margin-left:auto;
   margin-right:auto;
   text-align: justify;
   width: 350px; 
   height: 200px;
   font-size: 18px;
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

const Headshot = styled.img` 

display: block;
  margin-left: auto;
  margin-right: auto;
  // width: 50%;
        max-width: 15%;
        height: auto;
        // left: 62px;
        // top: 70px;
        
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
        border-radius: 50%;
`