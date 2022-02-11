import styled from "styled-components";
import {useContext} from 'react'
import { motion } from "framer-motion";
import { Context } from '../context/Context';
import { shortenAddress } from "../utils/shortenAddress";
import "../index.css"

const Connect = styled.button`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
background-color:#FCF6F4;
border: none;
padding:0.5rem;



`;

const ConnectButton = () =>{
    const {connectedAccount, connectWallet} = useContext(Context)

    return (
    <>
        
      { connectedAccount ?    (   <Connect
        >
        <motion.h3
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {shortenAddress(connectedAccount)}
        </motion.h3>
        </Connect>)
       :
          
       (   <Connect
        onClick={connectWallet}
        >
        <motion.h3
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Connect
        </motion.h3>
        </Connect>)}
  </>
  )
}

export default ConnectButton;



// {mq ? (
//     <Connect
//       click={+click}
//       theme={"dark"}
//       onClick={connectWallet}
    
//     >
//       <motion.h3
//         initial={{
//           y: -200,
//           transition: { type: "spring", duration: 1.5, delay: 1 },
//         }}
//         animate={{
//           y: 0,
//           transition: { type: "spring", duration: 1.5, delay: 1 },
//         }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         Connect
//       </motion.h3>
//     </Connect>
   
//   ) 
//   : 
//   (
//     <Connect
//       click={+false}
      
//     >
//       <motion.h3
//         initial={{
//           y: -200,
//           transition: { type: "spring", duration: 1.5, delay: 1 },
//         }}
//         animate={{
//           y: 0,
//           transition: { type: "spring", duration: 1.5, delay: 1 },
//         }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         Connect
//       </motion.h3>
//     </Connect>
//   )}
