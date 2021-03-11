import React from 'react'
import styled from 'styled-components'

export default function AboutWaveBackground() {
    return (
    
    <Wrapper>
        <Background src='/images/animations/about/background.svg'/>
        <FirstWave 
        src="/images/animations/about/wave1.svg" 
       
        />
        <SecondWave src="/images/animations/about/wave2.svg" />
        {/* <ThirdWave src="/images/waves/courses-wave3.svg" /> */}
        <FourthWave src="/images/animations/about/wave3.svg" />
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;

`
const FirstWave = styled.img`
/* 
    position: absolute;
    z-index: -1;

    @media (min-width: 1440px) {
        width: 100%;
    } */
    position: absolute;
    width: 2269.05px;
    height: 487.76px;
    left: -190.69px;
    /* top: 137.24px; */
/* bottom: 100px; */

/* background: linear-gradient(180deg, #FF6869 -19.02%, #FF927A 33.27%, rgba(255, 95, 143, 0) 88.93%); */
/* filter: blur(250px); */
`

const SecondWave = styled.img`
    position: absolute;
    width: 1576.19px;
    height: 323.63px;
/* left: calc(50% - 1576.19px/2 + 1590.52px); */
    top: 415.18px;

/* background: linear-gradient(148.19deg, rgba(97, 210, 204, 0.6) -2.66%, rgba(255, 255, 255, 0) 57.3%); */
/* backdrop-filter: blur(54.9462px); */
/* Note: backdrop-filter has minimal browser support */

/* transform: matrix(-1, 0, 0, 1, 0, 0); */
`

const FourthWave = styled.img`
    position: absolute;
    top: 500px;
    left: 10px;
 
`

const Background = styled.img`
 /* background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%); */
    position: absolute;
    width: 100%;
    /* height: 800px; */
    z-index: -1; 

`
const BottomWave = styled.img`
    @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`