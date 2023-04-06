import React,{useEffect,useContext,useState} from 'react'
import Image from 'next/image';
import C1 from '../../Images/C1.jpg'
import C2 from '../../Images/C2.jpg'
import C3 from '../../Images/C3.jpg'
import C4 from '../../Images/C4.jpg'
import C5 from '../../Images/C5.png'
import Property from '../Property';
import { Data } from '@/pages/_app';
import axios from 'axios';
import Link from 'next/link';

const Others = () => {
  const [array,setArray]=useState([]);
  const {status,contract,provider,account,chain,connectWallet}=useContext(Data);
  useEffect(()=>{
    const loadContents=async()=>{
      if(status=='connected'){
      const res=await axios.get("http://localhost:3030/getProperties");
      setArray(res.data.body);}
    }
    loadContents();
  },[status])
  return (
    <div className=' bg-gray-50 px-40 py-20 pt-40'>

      <div className='text-center'>
        <p className='font-serif text-lg'>Check Out</p>
        <h1 className='font-serif font-bold text-5xl text-cyan-500'>Find what suits You</h1>
        <br/>
      </div>

      <div className='flex flex-row justify-center  flex-wrap'>

       
       {array.map((object,id)=>(<Property key={id} id={object.id} image={object.image} address={object.propertyAddress} price={object.price} heading={object.isHouse?"getHouse":"getFlats"}/>))}
       

      </div>

      <div className='flex flex-row justify-center  flex-wrap mt-5'>
             <Link href="/buy" className='text-3xl font-mono text-blue-800'>Read More...</Link>
      </div>

    </div>
  )
}

export default Others