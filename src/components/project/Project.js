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
                aria-label="Click to go to Galaxybnb!"
                tabIndex={0}
             />
             <div 
                className="mockup2" 
                onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                role="link"  
                aria-label="Click to go to Rick and Morty Quiz app!"
                tabIndex={0}
             />
             <div 
                className="mockup3" 
                onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                role="link"  
                aria-label="Click to go to Rick and Morty Quiz app!"
                tabIndex={0}
             />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 2px;
    margin: 0 16px 16px 16px;

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
        transition-delay: 0.2s;
        transform: translate(-30px, -30px)
    }
}

.mockup1 {
    width: 150px;
    height: 150px;  
    

    background: url('/images/icons/saturn.png'), white;);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 50%;

}

.mockup2 {
    // position: absolute;
    /* width: 183px;
    height: 120px; */
    width: 150px;
    height: 150px;
    right: 403px;
    top: 0px;
    

    background: url('/images/icons/ufo.png'), white;);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    border: 0.27304px solid rgba(255, 255, 255, 0.5);

    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);

    backdrop-filter: blur(21.8432px);
/* Note: backdrop-filter has minimal browser support */

    
    border-radius: 50%;
}

.mockup3 {
    // position: absolute;
    width: 150px;
    height: 150px;  

    background: url('/images/icons/chat.png'), white;);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    
    border-radius: 50%;
}
`

const Title = styled(H1)`
    text-align: center;
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