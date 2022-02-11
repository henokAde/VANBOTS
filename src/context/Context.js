import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";

export const Context = React.createContext();
const {ethereum} = window;

export const ContextProvider = ({children}) =>{
    const [connectedAccount, setConnectedAccount] = useState("");
  
    //Check if wallet is connected 
    const checkIfWalletIsConnected = async() =>{

        try {
            
            if(!ethereum) return toast("Please install metamask");
            const accounts = await ethereum.request({method: 'eth_accounts'});
            if (accounts.length) {
                setConnectedAccount(accounts[0]);
    
                // get All transactions
            } else{
                toast("no account found connect your wallet");
            }
            // console.log(accounts);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }
    

    //method to switch network

    const switchNework = async() =>{
        // Check if MetaMask is installed
        // MetaMask injects the global API into window.ethereum
        if (ethereum) {
           try {
             // check if the chain to connect to is installed
             await window.ethereum.request({
               method: 'wallet_switchEthereumChain',
               params: [{ chainId: '0x3' }], // chainId must be in hexadecimal numbers
             });
           } catch (error) {
             // This error code indicates that the chain has not been added to MetaMask
             // if it is not, then install it into the user MetaMask
             if (error.code === 4902) {
               try {
                 await ethereum.request({
                   method: 'wallet_addEthereumChain',
                   params: [
                     {
                       chainId: '0x3',
                       rpcUrl: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                     },
                   ],
                 });
               } catch (addError) {
                 console.error(addError);
               }
             }
             console.error(error);
           }
         } else {
           // if no window.ethereum then MetaMask is not installed
           toast('MetaMask is not installed. Please install metamask. Go to Faq for more informations');
         } 

    }

    //method to connect wallet
    const connectWallet = async () =>{
        try {
            if(!ethereum) return toast("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setConnectedAccount(accounts[0])
            switchNework()
            toast.success("Wallet connected");
            await window.location.reload
        } catch (error) {
            console.log(error);
            toast.error("No ethereum object")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
       
    }, []);

    return(
        <Context.Provider value={{connectWallet, connectedAccount}}>
            {children}
        </Context.Provider>
    )
}