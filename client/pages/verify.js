import React,{useState,useEffect,useContext} from 'react';
import Verify from '@/components/Verify';
import { Data } from './_app';
import {Loading,Error,NoMetamask,Polygon,NotConnected} from '../components/context'

const verify = () => {
 
  const {status,contract,provider,account,connectWallet}=useContext(Data);
  const userLoggedIn=(
    <Verify/>
  )
  return (
    <div>{status=='connected'?userLoggedIn:status=='notconnected'?<NotConnected/>:status=='nometamask'?<NoMetamask/>:status=='error'?<Error/>:<Loading/>}</div>
  )
}

export default verify