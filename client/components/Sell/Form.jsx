import React, { useEffect, useState,useContext } from 'react';
import House from './sellHouse';
import Apartment from './sellAppartment';
import List from './List';
import { Data } from '@/pages/_app';
import { ethers } from 'ethers';

const Form = () => {

  const [value,setValue]=useState(1);
  const [price,setPrice]=useState(0);
  const {status,contract,provider,account,connectWallet}=useContext(Data);

  const changeState=()=>{
    if(value==1){
      setValue(2);
    }
    else{
      setValue(1)
    }
  }
  useEffect(()=>{
    const loadContents=async()=>{
      const res=await contract.listingPrice();
      const listingPrice=await ethers.utils.formatUnits(res);
      setPrice(listingPrice);
    }
    loadContents();
  },[])
  return (
    <div className='pt-32'>
       <div className='text-center bg-gray-50 py-5 font-serif text-xl'>
          <p>Listing price is currently &nbsp; {price} &nbsp;  ETH</p>
       </div>
       <br/>
       <List/><List/>
       <br/>
       <div className='mx-auto w-96 rounded-md bg-gray-100 px-10 py-5 font-semibold flex flex-row justify-between items-center text-xl'>

          <button className={value==1?'text-cyan-500':''} onClick={changeState}>Sell House</button>
          <button className={value==2?'text-cyan-500':''} onClick={changeState}>Sell Appartment</button>

       </div>
       <div className='px-40 py-5 w-full'>
        <h1 style={{fontFamily: 'Montserrat, sans-serif'}} className='text-5xl font-bold  mx-20'>Fill out the Details :</h1>
        {value==1?<House/>:<Apartment/>}
       </div>

    </div>
  )
}

export default Form