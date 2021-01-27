import { Link } from 'gatsby';
import React, { useState } from 'react'
import styled from 'styled-components'
import {menuData} from '../../data/MenuData'
import MenuButton from '../buttons/MenuButton';
import MenuToolTip from '../tooltips/MenuToolTip';

export default function Header() {
const [isOpen, setIsOpen] = useState(false)
    return (
        <Wrapper >
            <Link to="/">
            <img src='/images/logos/logo.svg' alt={'logo'}/>
            </Link>
            <MenuWrapper count={menuData.length}>
                {menuData.map((item, index) => 
                item.link === "/account" ? (
                <MenuButton item={item} key={index} onClick={() => setIsOpen(!isOpen)}/>
                ) : (
            <MenuButton item={item} key={index}/>
        ))}
         </MenuWrapper>
             
         <MenuToolTip isOpen={isOpen}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 44px auto;
    width: 100%;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
`
const MenuWrapper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(${props => props.count}, auto);
`
