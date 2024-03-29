import React from 'react'
import styled from 'styled-components'
// import { Reveal } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'


export default function MockUpAnimation() {
    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
console.log(window)
    return (
    <Wrapper>
        <div 
        className="mockup1" 
        onClick={() => openNewTab("https://medium.com/@rianna.cleary")}
        onKeyDown={() => openNewTab("https://medium.com/@rianna.cleary")}  
        role="link"  
        aria-label="Click to see my blogs!"
        tabIndex={0}
        >
        </div>
        <div 
        className="mockup2" 
        onClick={() => openNewTab("https://www.linkedin.com/in/riannacleary")}
        onKeyDown={() => openNewTab("https://www.linkedin.com/in/riannacleary")}  
        role="link"  
        aria-label="Click to see my blogs!"
        tabIndex={0}
        />
        <div 
        className="mockup3" 
        onClick={() => openNewTab("https://github.com/rlc900")}
        onKeyDown={() => openNewTab("https://github.com/rlc900")}  
        role="link"  
        aria-label="Click to see my Github Repos!"
        tabIndex={0}
        >
        </div>
        
    </Wrapper>
)}

const Wrapper = styled.div`
    position: relative;
    perspective: 5000;
    text-align: center;
  

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
            transform: translate(0px, -60px)
        }
        &.mockup3 {
            display: block;
            transition-delay: 0s;
        }
        :hover {
            filter: brightness(120%) saturate(120%)
        }
    }

    .mockup1 {
        position: absolute;
        /* width: 183px;
        height: 120px; */
        width: 150px;
        height: 150px;
        top: -50px;
        

        background: url('/images/icons/blog.png'), white;);
        background-size: 120px;
        background-position: center;
        background-repeat: no-repeat;
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
        width: 150px;
        height: 150px;
        left: 234px;
        top: 0px;

        background: url('/images/icons/linkedin.png'),white;);
        background-size: 100px;
        background-position: center;
        background-repeat: no-repeat;
        border: 0.27304px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

        /* border-radius: 16.3824px; */
        border-radius: 50%;
  }

    .mockup3 {
        position: absolute;
        width: 300px;
        height: 300px; 
        // left: 62px;
        top: 70px;

        background: url('/images/icons/github.png'), white;;
        border: 0.342305px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(27.3844px);
        /* Note: backdrop-filter has minimal browser support */
        background-size: 250px;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
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