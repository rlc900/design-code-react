import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'


export default function MockUpAnimation() {
console.log(window)
    return (
    <Wrapper>
        <div 
        className="mockup1" 
        onClick={() => (window.location = "https://medium.com/@rianna.cleary")}
        onKeyDown={() => (window.location = "https://medium.com/@rianna.cleary")}  
        role="link"  
        aria-label="Click to see my blogs!"
        tabIndex={0}
        />
        <div 
        className="mockup2" 
        onClick={() => (window.location = "https://www.linkedin.com/in/riannacleary")}
        onKeyDown={() => (window.location = "https://www.linkedin.com/in/riannacleary")}  
        role="link"  
        aria-label="Click to see my blogs!"
        tabIndex={0}
        />
        <div 
        className="mockup3" 
        onClick={() => (window.location = "https://github.com/rlc900")}
        onKeyDown={() => (window.location = "https://github.com/rlc900")}  
        role="link"  
        aria-label="Click to see my Github Repos!"
        tabIndex={0}
        />
        
    </Wrapper>
)}

const Wrapper = styled.div`
    position: relative;
    perspective: 5000;
  

        /* these queries are not working */
        /* ipad */
    @media (max-width: 768px) {
        transform: scale(0.6);
        transform-origin: top left;
    }
/* iphone */
    @media (max-width: 450px) {
        transform: scale(0.4);
    }

    div {
        transform: rotateY(0deg) rotateX(5deg); 
        transform-origin: bottom left;
    }

    * {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    

    :hover div {
        transform: rotateY(0deg) rotateX(0deg);

        &.mockup1 {
            transition-delay: 0.2s;
            transform: translate(-30px, -30px)
        }
        &.mockup2 {
            transition-delay: 0.2s;
            transform: translate(0px, -30px)
        }
        &.mockup3 {
            transition-delay: 0s;
        }
        :hover {
            filter: brightness(150%) saturate(120%)
        }
    }

    .mockup1 {
        position: absolute;
        /* width: 183px;
        height: 120px; */
        width: 150px;
        height: 150px;
        right: 617px;
        top: -50px;

        background: url('/images/animations/medium2.png'), radial-gradient(
          218.51% 281.09% at 100% 100%,
          rgba(253, 63, 51, 0.6) 0%,
          rgba(76, 0, 200, 0.6) 45.83%,
          rgba(76, 0, 200, 0.6) 100%
        );
        background-size: 160px;
        background-position: center;
        border: 0.273134px solid rgba(255, 255, 255, 0.3);
        box-sizing: border-box;
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
        backdrop-filter: blur(21.8507px);
        /* Note: backdrop-filter has minimal browser support */

        /* border-radius: 16.3881px; */
        border-radius: 50%;

    }

    .mockup2 {
        position: absolute;
        /* width: 183px;
        height: 120px; */
        width: 150px;
        height: 150px;
        right: 403px;
        top: 0px;

        background: url('/images/animations/linkedin2.png'), linear-gradient(
          198.85deg,
          #4316db 12.72%,
          #9076e7 54.49%,
          #a2eeff 100.01%
        );
        background-size: 150px;
        background-position: center;
        border: 0.27304px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

        /* border-radius: 16.3824px; */
        border-radius: 50%;
  }

    .mockup3 {
        position: absolute;
        width: 300px;
        height: 300px; 
        /* height: 200px;
        width: 200px; */
        left: 62px;
        top: 70px;

        background: url('/images/animations/github.png'), rgba(23, 12, 61, 0.5);
        border: 0.342305px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(27.3844px);
        /* Note: backdrop-filter has minimal browser support */
        background-size: 300px;
        background-position: center;
        /* border-radius: 6.8461px; */
        border-radius: 50%;
    }

    .mockup4 {
        position: absolute;
        width: 399px;
        height: 274px;
        right: 207px;
        top: 262px;

        background: url('/images/animations/mockup4.svg'), rgba(39, 20, 62, 0.3);
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        backdrop-filter: blur(27.3844px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 14px;
    }

    .mockup5 {
        position: absolute;
        width: 412px;
        height: 274px;
        right: -228px;
        top: 262px;

        background: url('/images/animations/mockup5.svg'), rgba(39, 20, 62, 0.2);
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        backdrop-filter: blur(27.3844px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 14px;

    }
`
//Add these when more projects are added!
// <div className="mockup4" />
// <div className="mockup5" /> 