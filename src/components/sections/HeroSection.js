import React, {useState, useEffect} from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import './HeroSection.css'
import { themes } from '../styles/ColorStyles';
import { H1 } from '../styles/TextStyles';
import { GlobalStyle, lightTheme, darkTheme } from '../styles/GlobalStyle';
import {Link} from 'react-scroll'
import HomeButton from '../home/HomeButton';
import {Button, Icon} from 'semantic-ui-react';
// import MockUpAnimation from '../animations/MockupAnimation';
// import WaveBackground from '../backgrounds/WaveBackground';


function HeroSection() {

  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const persistingTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(persistingTheme);
    localStorage.setItem('theme', persistingTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, []);

    return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <>
       <GlobalStyle/>
      <Wrapper>
         <Button 
         onClick={toggleTheme}
         icon
         className='button'
         >
          {isDarkTheme ? <Icon name='sun'/> : <Icon name='moon'/>}
         </Button>
        <Link className='link-three' to="contact" smooth={true} duration={1000}>Contact</Link>
        <Link className='link-two' to="project" smooth={true} duration={1000}>Project</Link>
        <Link className='link-one' to="about" smooth={true} duration={1000}>About</Link>
        <HomeButton/>
        <ContentWrapper>
          <TextWrapper>
            <Title>Rianna Cleary<br /> <span>Full Stack Developer</span></Title>
          </TextWrapper>
        </ContentWrapper>
        
      </Wrapper>
      </>
      </ThemeProvider>
    )
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px);}
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Wrapper = styled.div`
  
  height: auto;
  
  .link-three {
    float: right;
    background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

  }

  .link-two {
    float: right;
    background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .link-one {
    float: right;
    background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .button {
    position: absolute;
    left: 10px;
    top: 10px;
  }

`

const ContentWrapper = styled.div`
  height: 100vh;
  margin: auto;
	padding: 200px 30px;
  
 
  

  // flex-direction: row;
  // grid-template-columns: 360px auto;
  // display: grid;
  // width: 10px;
	// max-width: 1234px;
  


  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`
const TextWrapper = styled.div`
  // max-width: 360px;
  // display: grid;
  // gap: 30px;
  text-align: center;
  
 
  > * {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 90px;
  
 
 

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	  -webkit-background-clip: text;
	  color: transparent;
    font-size: 40px;
  }

  @media (max-width: 450px) {
        font-size: 48px;
    }
`
// this is a test comment for commiting