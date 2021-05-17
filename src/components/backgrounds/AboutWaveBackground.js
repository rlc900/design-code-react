import React from 'react'
import styled from 'styled-components'
import WaveBackground from './WaveBackground'


export default function AboutWaveBackground() {
    return (
        <Wrapper>
         <WaveBackground/>
        </Wrapper>
    ) 
}


const Wrapper = styled.div`
    position: relative;
`
