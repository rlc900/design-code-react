import { Link } from 'gatsby';
import React, { useState } from 'react'
import styled from 'styled-components'
import {menuData} from '../../data/MenuData'
import MenuButton from '../buttons/MenuButton';
import MenuToolTip from '../tooltips/MenuToolTip';

export default function Header() {
    // return null
const [isOpen, setIsOpen] = useState(false)

function handleClick(event) {
    event.preventDefault()
    setIsOpen(!isOpen)
    console.log("im clicked!")
}
    return (
        <Wrapper>
                {menuData.map((item, index) => <MenuButton item={item} key={index}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
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
`
const MenuHeader = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(${props => props.count}, auto);

    @media (max-width: 768px) {
      > a {
        display: none;
      }
      grid-template-columns: auto;
    }
`
const HamburgerWrapper = styled.div`
    display: none;

    /* iPad and less */
    @media (max-width: 768px) {
        display: block;
    }
`
//<Link to="/">
//<img src='/images/logos/home-icon.svg' alt={'logo'}/>
//</Link>