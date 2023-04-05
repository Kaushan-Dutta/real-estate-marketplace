import React,{useState,useEffect} from 'react';
import Property from '../Property';
import axios from 'axios';

const getFlats = () => {

  useEffect(()=>{
    const loadContents=async()=>{
      const value=12;
      const res=await axios.get("http://localhost:3030/getProperty",{params: {
        id: value
      }});
      console.log("The id is",res.data.body);
    }
    loadContents();
  },[])
  const array=[1,2,3,4,5,6,7,8]
  return (
    <div className='flex flex-row justify-center flex-wrap'>
        {array.map((object,id)=>(<Property key={id} id={id} heading="getFlats"/>))}
       
    </div>
  )
}

export default getFlats