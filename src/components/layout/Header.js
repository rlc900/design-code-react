// import { Link } from 'gatsby';
import React, { forwardRef, useRef } from 'react'
import styled from 'styled-components'
import {menuData} from '../../data/MenuData'
import MenuButton from '../buttons/MenuButton';
import {animateScroll as scroll} from "react-scroll";
import { StickyContainer, Sticky } from 'react-sticky';

export default function Header() {

// {menuData.map((item, index) => <MenuButton item={item} key={index}/>)}
// {menuData.map((item, index) => 
//     <Link
//         activeClass="active"
//         to={item.id}
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//     >
//         {item.title}
//     </Link>)}

//NEXT STEPS TO DO:
// 1. make links for about, project, and contact
// 2. create components to be rendered out for them with a div and id of the name of component
// 3. not sure yet??


    return (
        <Wrapper>
            <StickyContainer>
            <Sticky isSticky={true}>{({ style }) => <Button style={style} onClick={() => scroll.scrollToTop()}>Home</Button>}</Sticky>
            </StickyContainer>
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

const Button = styled.button`
    position: fixed;
    left: 10px;
`


// const MenuHeader = styled.div`
//     display: grid;
//     gap: 30px;
//     grid-template-columns: repeat(${props => props.count}, auto);

//     @media (max-width: 768px) {
//       > a {
//         display: none;
//       }
//       grid-template-columns: auto;
//     }
// `
// const HamburgerWrapper = styled.div`
//     display: none;

//     /* iPad and less */
//     @media (max-width: 768px) {
//         display: block;
//     }
// `
//<Link to="/">
//<img src='/images/logos/home-icon.svg' alt={'logo'}/>
//</Link>
