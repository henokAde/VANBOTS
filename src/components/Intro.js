import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "./Themes";
import { ethers } from 'ethers';
import NFT from "../smart_contract/artifacts/contracts/NFT.sol/VanBots.json";
import { nftaddress } from "../config";
import "../index.css"
import hidden from "../assets/images/Hidden.png";
import { toast } from "react-toastify";
import Loading from '../subcomponents/Loading';



const provider = new ethers.providers.Web3Provider(window.ethereum);
// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(nftaddress, NFT.abi, signer);


///Styles
const Box = styled(motion.div)`
  /* width: 50vw;
height:50vh;
 */
 overflow:auto;
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(30)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`;

const SubBox = styled.div`
  width: 100%;
  display:flex;
  ${'' /* justify-content:center; */}
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  ${mediaQueries(50)`
      width: 100%;
    height: 50%;
      .pic {
    
    width: 70%;
    
  }

  `};

  ${mediaQueries(40)`
  
      .pic {
    
    width: 80%;
    
  }

  `};

  ${mediaQueries(30)`
     

      .pic {
    
    width: 90%;
    
  }

  `};
  ${mediaQueries(20)`
     

     .pic {
   
   width: 80%;
   
 }

 `};
`;

//Card 

const BoxCard = styled(motion.div)`
  ${'' /* backdrop-filter: blur(2px); */}
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  ${'' /* width: calc(10rem + 15vw); */}
  width: 16vw;
  height: 20rem;
  ${'' /* border: 1px solid ${(props) => props.theme.text}; */}
  border: 2mm ridge rgb(0, 0, 0);
  padding: 3rem;
  
  margin: 0 auto;
  ${'' /* color: ${(props) => props.theme.text}; */}
  color: white;

  display: flex;
  flex-direction: column;
  z-index: 5;
  background-color:#FCF6F4;

  cursor: pointer;
  ${'' /* &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};

    transition: all 0.3s ease;
  } */}

  ${mediaQueries(50)`
    width:calc(60vw);

  `};
  ${mediaQueries(30)`
    
    height:18rem;

  `};

  ${mediaQueries(25)`
    
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;

  `};
`;

const ImageComp = styled.div`
  background-image: ${(props) => `url(${props.img})`};

  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  background-position: center center;
  ${mediaQueries(25)`
    
    height:70%;


  `};

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;



const Container = styled(motion.div)`
  border-radius: 10px;
  padding-top:2.5rem;
  display:flex;
  justify-content:center;
  backgound-color:red;
  z-index: 3;
  
  `;
  
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};


//Start Component
const Intro = () => {


  const [totalMinted, setTotalMinted] = useState(30);
  const [height, setHeight] = useState("55vh");
 

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);

  const getCount = async () => {
      const count = await contract.count();
      // console.log(parseInt(count));
      setTotalMinted(parseInt(count));
  
    };

  
  return (
    <div>
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
        <SubBox>         
        <div className="container">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="containerImage">
                <NFTImage  tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
   
      </div>
      </SubBox>
      
   
    </Box>
    </div>
 
  )
}

function NFTImage ({ tokenId, getCount}) {
  const [isLoading, setIsLoading] = useState(false);
  const contentId = 'QmX4YZzFKzE5Vkb2RtCD7xsjXs3rD94BK4X2cQBxcM86Ko';
  const metadataURI = `${contentId}/${tokenId}.json`;
  // const imageURI = `https://gateway.pinata.cloud/ipfs/QmX4YZzFKzE5Vkb2RtCD7xsjXs3rD94BK4X2cQBxcM86Ko/${10}.png`;
  // const hiddenURI= 'https://gateway.pinata.cloud/ipfs/QmWDj5qcXhJfrf6iiJPsC9JZHn218hSL7365zH8zgG5s3H/Hidden.png'
  const hiddenURI = hidden


  const [isMinted, setIsMinted] = useState(false);
  
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);
  
  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  };
  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });
    setIsLoading(true);

    await result.wait();
    setIsLoading(false);
    toast.success("NFT Minted")
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (

    <Container variants={item}>
       <BoxCard>        
          <ImageComp  img={isMinted ? `https://gateway.pinata.cloud/ipfs/QmX4YZzFKzE5Vkb2RtCD7xsjXs3rD94BK4X2cQBxcM86Ko/10.png`: hiddenURI}/> 
          {isLoading? <Loading /> : (<div className='card-body' >
            <h5 className="card-title">ID #{tokenId}</h5>
            {!isMinted ? (
                <button className="btn btn-primary" onClick={mintToken}>
                    Mint
                </button>
                ) : (
                <h3 className="taken" onClick={getURI}>
                  Taken!
                </h3>
              )}
          </div> )}         
        </BoxCard>
      </Container>
     

  );
}

export default Intro