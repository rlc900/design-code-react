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
             I enrolled into Flatiron School’s immersive software engineering program in November 2021 in which I learned all about Full Stack Development.  
             I graduated in March of 2020 right before the pandemic hit and was able to become a Software Engineering Coach there in October of that year!
             In that role, I helped and supported students throughout their bootcamp journey by running code reviews, lectures, and design sprints.
             <br></br> 
             In my free time, I'm usually spending too much time playing video games, 
             creating music or meditating to keep my stimulated brain at ease.
             I love the collaborative nature of my role and moving forward, I’d see myself in a similar environment: among other driven web developers with whom we work to attain bigger goals. 
             </span>
         </Description>
        </Wrapper>
        </>
    ) 
}

const Wrapper = styled.div`
  height: 100px;
    // .child {
    //   flex: 1
    // }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  // margin-left: 70px;

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
  //  margin-top: 20px;
   -webkit-background-clip: text;
   color: transparent;

   margin-left:auto;
   margin-right:auto;
   text-align: justify;
   width: 500px; 
   height: 300px;
   
   font-size: 18px;
   padding: 30px;
  //  top: 55px;
   
   span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	  -webkit-background-clip: text;
	  color: transparent;
    text-align: center;
    width; 100px;
   
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