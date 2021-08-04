import React from 'react';
import styled from 'styled-components'
import {H1} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'

export default function Project() {

    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <Wrapper id="project">
            <Title><span>Projects</span></Title>
            <div 
                className="mockup1" 
                onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                role="link"  
                aria-label="Click to see Galaxybnb!"
                tabIndex={0}
             />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    // position: relative;
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
        transform: translate(0px, -30px)
    }
    &.mockup3 {
        transition-delay: 0s;
    }
    // :hover {
    //     filter: brightness(150%) saturate(120%)
    // }
}

.mockup1 {
    // position: absolute;
    width: 150px;
    height: 150px;  

    background: url('/images/icons/saturn.png'), white;
    );
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    margin: 0 auto;
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