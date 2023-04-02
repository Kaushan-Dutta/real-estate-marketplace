import React from 'react';
import metamaskLogo from '../Images/metamask.png'
import errorImg from '../Images/error.png';
import polygon from '../Images/polygon.png';

import Image from 'next/image';




const Loading=()=>{
    return(
      <div className=' w-screen  h-screen pb-5 pt-32 place-content-center grid'>
            <div className='text-3xl font-serif font-bold '>Loading...</div>
        </div>
    )}
const Error=()=>{
    return(
      <div className=' w-screen  h-screen pb-5 pt-32 place-content-center grid'>
     
            <Image src={errorImg} width={250} height={200} className='mx-auto'/>
            <br/>
            <div className='text-3xl font-serif font-bold '>
                An error occurred. Please try again later or from another browser.
            </div>
        </div>
    )}
const NoMetamask=()=>{
    return(
      <div className=' w-screen  h-screen pb-5 pt-32 place-content-center grid'>
              <Image src={metamaskLogo} width={200} height={200} />
              <div className='text-3xl font-serif font-bold '>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={`https://metamask.io/download.html`}
                >
                  You must install Metamask, a <br /> virtual Ethereum wallet, in your
                  browser.
                </a>
              </div>
            </div>
)}
const Polygon=()=>{
    return(
      <div className=' w-screen  h-screen pb-5 pt-32 place-content-center grid'>
      <div className=' max-w-sm  rounded-md shadow-lg px-10 py-5 bg-slate-600  place-items-center grid' style={{width:"50vh",height:"25vh"}}>
          <Image src={polygon} width="50px" style={{cursor:'pointer'}} className="text-center w-16" />
          <h1 className='text-center text-2xl text-zinc-300 mt-3' style={{fontFamily:'Montserrat, sans-serif'}}>Switch to Mumbai Testnet</h1>
          
      </div>
  
      </div>
    )}

const NotConnected=()=>{
        return(
          <div className='w-screen  h-screen pb-5 pt-32 place-content-center grid '>
            
                <Image src={metamaskLogo} width={250} height={200}  className="text-center  mx-auto"/>
                <br/>
                <h1 className='text-3xl font-serif font-bold ' style={{fontFamily:'Montserrat, sans-serif'}}>Connect your Metamask wallet to continue...</h1>
                
           
          </div>
    )}

export {Loading,Error,NoMetamask,Polygon,NotConnected}