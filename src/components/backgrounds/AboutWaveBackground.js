import React from 'react'
import styled from 'styled-components'

export default function AboutWaveBackground() {
    return (
    
    <Wrapper>
        <Background />
        {/* <CourseCard src="/images/design/course-card.svg"/> */}
        <FirstWave src="/images/waves/courses-wave1.svg" 
        style={{top: "100px"}}
        />
        <SecondWave src="/images/waves/courses-wave2.svg" />
        <ThirdWave src="/images/waves/courses-wave3.svg" />
        <FourthWave src="/images/waves/footer-wave2.svg" />
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;

`
const FirstWave = styled.img`
    position: absolute;
    z-index: -1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`

const SecondWave = styled.img`
    position: absolute;
    z-index: -1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`
const ThirdWave = styled.img`

    position: relative;
    top: 120px;

`

const FourthWave = styled.img`
    position: relative;
    bottom: 260px;
`

const CourseCard = styled.img`

`

const Background = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
    position: absolute;
    width: 100%;
    height: 800px;
    z-index: -1;
`
const BottomWave = styled.img`
    @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`