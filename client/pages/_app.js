import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import React,{useState,useEffect,createContext} from 'react';

export const Data=createContext();

export default function App({ Component, pageProps }) {

  const [status,setStatus]=useState('not');
  const [contract,setContract]=useState(null);
  const [provider,setProvider]=useState(null);
  const [account,setAccount]=useState(0);
  const [chain,setChain]=useState(false);

  useEffect(()=>{

    if(window.ethereum){
      walletConnection();
    }
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    }); 

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    
  },[])

  useEffect(()=>{
    const loadChain=async()=>{
     const chain=await window.ethereum.networkVersion;
     if(chain=='80001'){setChain(true);}
    }
    loadChain();
   });
 
  const walletConnection=async()=>{
    if(!window.ethereum){
      setStatus("nometamask");
    }
    else{
      try{
        const accounts=await window.ethereum.request({method:'eth_accounts'});

        if(accounts.length>0)
        {
            const web3modal=new Web3Modal();
            const connection=await web3modal.connect();
            const provider=new ethers.providers.Web3Provider(connection);
            // console.log(provider);
            const signer= provider.getSigner();
            console.log(accounts);
            setProvider(provider);
            setAccount(accounts[0]);
            setStatus("connected");
        }
        else{
          setStatus("notconnected");
        }
      }
      catch(err){
        console.log(err);
        setStatus("error");
      }
    }
  }
  
  const connectWallet=async()=>{
     if(!window.ethereum){
       setStatus("nometamask")       
     }
     else{
      try{
           const web3modal=new Web3Modal();
           const connection=await web3modal.connect();
           
     }
     catch(err){
      setStatus("error")
     }}

  }
  return (
    <>
      <Data.Provider value={{status,contract,provider,account,chain,connectWallet}}>
        <Navbar />
        <Component {...pageProps} />
      </Data.Provider>
    </>
  );
}
