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
        {/* <FourthWave src="/images/animations/about/wave3.svg" /> */}
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;
    /* background-image: url('/images/animations/about/background.svg'); */
    /* background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%); */
`
const FirstWave = styled.img`
    position: absolute;
    /* background-size: 100% auto; */
`

const SecondWave = styled.img`
    position: absolute;
    width: 1576.19px;
    height: 323.63px;
    left: 26px;
    top: 400px;
`

const FourthWave = styled.img`
    /* position: absolute; */
    /* top: 500px;
    left: 10px;  */
    
`

const Background = styled.img`
 /* background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%); */
    position: absolute;
    width: 100%;
    /* height: 800px; */
    z-index: -1; 
`