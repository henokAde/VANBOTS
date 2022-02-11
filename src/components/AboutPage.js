import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import msg from "../assets/images/msg.png"
import { DarkTheme, mediaQueries } from './Themes'

import SocialIcons from "../subcomponents/SocialIcons"
import LogoComponent from "../subcomponents/LogoComponent"
import ParticlesComponent from "../subcomponents/ParticlesComponent"
import BigTitle from "../subcomponents/BigTitle"

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const Message = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

`


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key='about'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
      <LogoComponent theme='dark' />
      <SocialIcons theme='dark' />
      <ParticlesComponent theme='dark' />
      <Message
        initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
        }}
      >
        <img src={msg}  alt="spaceman" />
      </Message>

      <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            WELCOME TO THE VANBOTS CLUB
            <br />
            <br />
            VANBOTS is a painting collection inspired by Elrond Hunter living on the Ethereum blockchain.
            <br />
            <br />
            MINT FEES : 0.05 ETH <br />
            <br />
           Go to FAQ page to get your ETH
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage