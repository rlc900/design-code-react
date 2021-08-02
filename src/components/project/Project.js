import React from 'react';
import styled from 'styled-components'
import {H1} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'

export default function Project() {
    return (
        <Wrapper id="project">
            <Title>Projects</Title>
            PROJECTS WILL GO HERE
        </Wrapper>
    )
}
const Wrapper = styled.div`
    
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