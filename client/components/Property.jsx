import React from 'react';
import Image from 'next/image';
import C1 from '../Images/C1.jpg'
import Link from 'next/link';

const Property = ({id,heading}) => {
  return (
    <div className='w-96 px-10 py-10 rounded shadow-lg my-5 border mx-5'>
        <Image src={C1} className='w-full rounded-lg'/>
        <br/>
        <h1 className='text-xl font-serif bold'>Vridavan Home</h1>
        <p className='text-lg font-mono '>Jellam kota, Madhya Pradesh, Beside Charminar Fort</p>
        <p className='text-slate-900 font-mono text-xl'>Price: <b>0.002 ETH</b></p>
        <br/>
        <button className='text-white font-mono px-10 py-3 w-full rounded shadow-md text-xl bg-cyan-500'><Link href={{
                pathname: "/buy/"+heading,
                query: { id: id }
              }} >View Details</Link></button>
    </div>
  )
}

export default Property