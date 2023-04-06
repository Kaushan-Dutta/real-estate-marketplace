import React,{useState,useEffect} from 'react';
import Property from '../Property';
import axios from 'axios';

const getHouse = () => {

  const [array,setArray]=useState([]);
  useEffect(()=>{
    const loadContents=async()=>{
      /* const value=12;
      const res=await axios.get("http://localhost:3030/getProperty",{params: {
        id: value
      }});
      console.log("The id is",res.data.body); */
      
      const res=await axios.get("http://localhost:3030/getHouse");
      
      setArray(res.data.body);
    }
    loadContents();
    console.log(array);

  },[])

  return (
    <div className='flex flex-row justify-center flex-wrap'>
        {array.map((object,id)=>(<Property key={id} image={object.image} id={object.id} address={object.propertyAddress} price={object.price} heading="getHouse"/>))}
       
    </div>
  )
}

export default getHouse