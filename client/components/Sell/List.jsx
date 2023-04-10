import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import C1 from '../../Images/C1.jpg';
import Verify from './Verify';
import axios from 'axios';

const style={
  wrapper:`flex flex-row justify-between px-10 py-5 rounded-md shadow-md bg-slate-500 items-center text-slate-50`,
  button:`px-10 py-3 text-xl text-slate-100 rounded-md bg-cyan-500 font-bold`
}

const List = ({id}) => {

  const [state,setState]=useState(false);
  const [assest,setAssest]=useState('');
  useEffect(()=>{
    const loadContents=async()=>{
      const res=await axios.get("http://localhost:3030/getProperty",{params:{id:id-1}});
      console.log(res.data.body)
      setAssest((res.data.body));
    }
    loadContents();
  },[])
 
  
  return (
    <div className='px-20 my-5'>
      <div className={style.wrapper}>
          <div className=''>
              <img src={assest.image}  className='rounded-full w-10 h-10'/>
          </div>
          <div className='w-4/5 '>
             <p>{assest.propertyName},{assest.propertyAddress}</p>
          </div>
          <div className=''>
            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}} onClick={()=>{setState(true)}}>Get Verified</button>
          </div>
      </div>
      {state?(
      <div className='mx-auto w-6/12 mt-5 border'>
           <Verify assest={assest} id={id} setState={setState}/>
      </div>):""}
    </div>
  )
}

export default List