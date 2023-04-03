import React from 'react'
import Image from 'next/image';
import C1 from '../../Images/C1.jpg'
import C2 from '../../Images/C2.jpg'
import C3 from '../../Images/C3.jpg'
import C4 from '../../Images/C4.jpg'
import C5 from '../../Images/C5.png'
import Property from '../Property';

const Others = () => {
  const array=[1,2,3,4,5]
  return (
    <div className=' bg-gray-50 px-40 py-20 pt-40'>

      <div className='text-center'>
        <p className='font-serif text-lg'>Check Out</p>
        <h1 className='font-serif font-bold text-5xl text-cyan-500'>Find what suits You</h1>
        <br/>
      </div>

      <div className='flex flex-row justify-center  flex-wrap'>

       
       {array.map((object,id)=>(<Property key={id} id={id}/>))}


      </div>

       

    </div>
  )
}

export default Others