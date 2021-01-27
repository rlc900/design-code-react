import React from 'react';
import styled from 'styled-components';
import MockUpAnimation from '../animations/MockupAnimation';
import WaveBackground from '../backgrounds/WaveBackground';
import PurchaseButton from '../buttons/PurchaseButton';
import { themes } from '../styles/ColorStyles';
import { H1, MediumText } from '../styles/TextStyles';

function HeroSection() {
    return (
      <Wrapper>
        <WaveBackground/>
        <ContentWrapper>
          <TextWrapper>
            <Title>Riannas <br /> Portfolio</Title>
             <Description>i'm a weeb</Description>
             <PurchaseButton title="Start Learning" subtitle="120+ hours of video"/>
          </TextWrapper>
          <MockUpAnimation/>
        </ContentWrapper>
      </Wrapper>
    )
}

export default HeroSection;

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
	max-width: 1234px;
  margin: 0 auto;
	padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 
`
