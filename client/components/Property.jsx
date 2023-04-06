import React from 'react';
import Image from 'next/image';
import C1 from '../Images/C1.jpg'
import Link from 'next/link';

const Property = ({id,image,address,price,heading}) => {
  return (
    <div className='w-96 px-10 py-10 rounded shadow-lg my-5 border mx-5'>
        <img src={image} className='w-full rounded-lg'/>
        <br/>
        <h1 className='text-slate-900  text-2xl' style={{fontFamily: 'Montserrat, sans-serif'}}><b>{price} ETH</b></h1>

        <p className='text-lg font-mono '>{address}</p>
        <br/>
        <button className='text-white font-mono px-10 py-3 w-full rounded shadow-md text-xl bg-cyan-500'><Link href={{
                pathname: "/buy/"+heading,
                query: { id: id }
              }} >View Details</Link></button>
    </div>
  )
}

export default Property