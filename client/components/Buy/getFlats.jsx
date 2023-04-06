import React,{useState,useEffect} from 'react';
import Property from '../Property';
import axios from 'axios';

const getFlats = () => {
  
  const [array,setArray]=useState([]);
  useEffect(()=>{
    const loadContents=async()=>{
      /* const value=12;
      const res=await axios.get("http://localhost:3030/getProperty",{params: {
        id: value
      }});
      console.log("The id is",res.data.body); */
      const res=await axios.get("http://localhost:3030/getFlat");
      //console.log((res.data.body)[0]);

      setArray(res.data.body);
    }
    loadContents();

  },[])
  return (
    <div className='flex flex-row justify-center flex-wrap'>
        {array.map((object,id)=>(<Property key={id} id={object.id} image={object.image} address={object.propertyAddress} price={object.price} heading="getFlats"/>))
        }
       
    </div>
  )
}

export default getFlats