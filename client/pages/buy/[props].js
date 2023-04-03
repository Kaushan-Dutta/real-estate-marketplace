import React,{useEffect,useState,useContext} from 'react';
import { Data } from '../_app';
import {Loading,Error,NoMetamask,Polygon,NotConnected} from '../../components/context'
import PropertyDetail from '@/components/Buy/PropertyDetail';

const props = () => {
  const {status,contract,provider,account,connectWallet}=useContext(Data);

  
  const userLoggedIn=(
      <PropertyDetail/>
  )

  return (

    <div>{status=='connected'?userLoggedIn:status=='notconnected'?<NotConnected/>:status=='nometamask'?<NoMetamask/>:status=='error'?<Error/>:<Loading/>}</div>
  )
}

export default props