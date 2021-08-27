import React from 'react'
import {animateScroll as scroll} from "react-scroll";
import styled from 'styled-components'
import {Button, Icon} from 'semantic-ui-react'

export default function HomeButton() {

    return (
        <Wrapper id="home">
            <Button 
                onClick={() => scroll.scrollToTop()}
                basic color='standard' content='standard'
                floated='right'
                as='icon'
                icon
            >  
            <Icon name='arrow up' />
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    // position: relative;
    top: 60px;
    display: flex;
    right: 10px;
    /* grid-template-columns: 44px auto;
    width: 100%;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center; */

    @media (max-width: 768px) {
        top: 30px;
    }
    @media (max-width: 450px) {
        top: 20px;
        padding: 0 20px;
    }

    .button {
        // box-shadow: white inset!important;
        // color: #e03997!important;
        position: fixed;
        top: 10px;
    } 
`

