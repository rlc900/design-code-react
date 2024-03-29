import React from 'react'
import styled from 'styled-components'

export default function WaveBackground() {
    // test comment
    return (
    
    <Wrapper>
        <Background src="/images/animations/circle.png"/>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;

`
const Background = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
`
// const Wave = styled.img`
//     position: absolute;
//     z-index: -1;

//     @media (min-width: 1440px) {
//         width: 100%;
//     }
// `
// const Background = styled.div`
//   background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
//   position: absolute;
//   width: 100%;
//   height: 800px;
//   z-index: -1;
// `
// const BottomWave = styled(Wave)`
// @media (prefers-color-scheme: dark) {
//     content: url("/images/waves/hero-wave3-dark.svg");
//   }
// `

/* <Wrapper>
<Background />
<Wave src="/images/waves/hero-wave1.svg" 
style={{top: "100px", filter: "blur(60px)"}}
/>
<Wave src="/images/waves/hero-wave2.svg" style={{top: "3500px"}}/>
<BottomWave src="/images/waves/hero-wave3.svg" style={{top: "500px"}}/>
</Wrapper> */