import React,{useEffect,useState,useContext} from 'react';
import Form from '@/components/Sell/Form';
import { Data } from './_app';
import {Loading,Error,NoMetamask,Polygon,NotConnected} from '../components/context'

const sell = () => {
  const {status,contract,provider,account,connectWallet}=useContext(Data);

 
  const userLoggedIn=(
      <Form/>
  )

  return (

    <div>{status=='connected'?userLoggedIn:status=='notconnected'?<NotConnected/>:status=='nometamask'?<NoMetamask/>:status=='error'?<Error/>:<Loading/>}</div>
  )
}

export default sell