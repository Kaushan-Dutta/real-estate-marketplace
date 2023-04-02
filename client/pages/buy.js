import React,{useEffect,useState,useContext} from 'react';
import { Data } from './_app';
import {Loading,Error,NoMetamask,Polygon,NotConnected} from '../components/context'
import List from '@/components/Buy/List';

const sell = () => {
  const {status,contract,provider,account,connectWallet}=useContext(Data);


  const userLoggedIn=(
      <List/>
  )

  return (

    <div>{status=='connected'?userLoggedIn:status=='notconnected'?<NotConnected/>:status=='nometamask'?<NoMetamask/>:status=='error'?<Error/>:<Loading/>}</div>
  )
}

export default sell