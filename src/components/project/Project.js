import React, {useState} from 'react';
import styled from 'styled-components'
import {H1} from '../styles/TextStyles'
import {Popup, Button, Header, Icon, Modal } from 'semantic-ui-react'


export default function Project() {
    const [open, setOpen] = useState(false)

    const apps = [
    {
        name: 'EZ Chat'
    },
    {
        name: 'Rick and Morty Quiz App'
    },
    {
        name: 'Galaxybnb'
    }
]
    

    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <>
        <Title><span>My Projects</span></Title>
        <Wrapper id="project">
            <Popup 
            content='Galaxybnb' 
            position='top center'
            trigger={
            <div 
                className="mockup1" 
                onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                onKeyPress={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                role="link"  
                aria-label="Click to go to Galaxybnb!"
                tabIndex={0}
             />}
             />
             <Popup 
                content='Rick and Morty Quiz' 
                position='top center'
                trigger={
             <div 
                className="mockup2" 
                onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                onKeyPress={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                role="link"  
                aria-label="Click to go to Rick and Morty Quiz app!"
                tabIndex={0}
             />}
             /> 
             <Popup 
             content='EZ Chat' 
             position='top center'
             trigger={
                <div
                className="mockup3" 
                onClick={() => openNewTab('https://nifty-elion-c5b8ef.netlify.app/')}
                onKeyPress={() => openNewTab('https://nifty-elion-c5b8ef.netlify.app/')}
                role="link"  
                aria-label="Click to go to Rick and Morty Quiz app!"
                tabIndex={0}
             />}
             />
        </Wrapper>
        <ModalWrapper>
        {apps.map((app) => {
            
           return ( 
           <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button size='small' icon='stack overflow'></Button>}
            >
               <Modal.Description>
                   <Header>{app.name}</Header>
                <p>
                 Tech stack will go here.
                </p>
               </Modal.Description>
               <Modal.Actions>
               <Button color='black' onClick={() => setOpen(false)}>
                Close
               </Button>
            </Modal.Actions>
            </Modal>
        )
    })}
         </ModalWrapper>
    </>
    )
}

const ModalWrapper = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 2px;
    margin: 0 16px 16px 16px;
    justify-content: center;
`

const Title = styled(H1)` 
    height: 20px;
    margin-top: 600px;
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

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 2px;
    margin: 0 16px 16px 16px;
    justify-content: center;
    height: 400px;
    

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

.mockup1 {
    width: 150px;
    height: 150px;  
    margin: auto;
    display: inline-block;

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

.mockup1:hover {
    transform: translate(0, -5px);
    filter: brightness(120%) saturate(120%);
}

.mockup2 {
    width: 150px;
    height: 150px;
    margin: auto;
    display: inline-block;

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

.mockup2:hover {
    transform: translate(0, -5px);
    filter: brightness(120%) saturate(120%);
}

.mockup3 {
    width: 150px;
    height: 150px;  
    margin: auto;
    display: inline-block;

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

.mockup3:hover {
    transform: translate(0, -5px);
    filter: brightness(120%) saturate(120%);
}
`
//<Popup 
            // content='Rick and Morty Quiz' 
            // position='top center'
            // trigger={
            //  <div 
                // className="mockup2" 
                // onClick={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                // onKeyPress={() => openNewTab('https://galaxybnb.herokuapp.com/home')}
                // role="link"  
                // aria-label="Click to go to Rick and Morty Quiz app!"
                // tabIndex={0}
            //  />}
            //  /> 
