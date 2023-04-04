import React from 'react';
import Image from 'next/image';
import C1 from '../../Images/C1.jpg';
import { BsCircleFill } from 'react-icons/bs';

const style={
  container:`rounded-md shadow-md px-10 py-10 `,
  wrapper:``,
  button:` bg-cyan-500 text-white text-xl font-serif rounded-md shadow-md px-10 py-3 mt-5`
}
const Verify = ( {setState}) => {
  return (
    <div className={style.container}>
        <div className='flex flex-row-reverse cursor-pointer items-center'>
          <BsCircleFill onClick={()=>{setState(false)}}/>
        </div>
        <div className='flex flex-row justify-between items-center '>
          <div className='mx-5 w-1/3'>
            <Image src={C1} className='rounded-md border shadow-sm w-96' />
          </div>
          <div className='mx-5 w-2/3'>
              <h1 className='text-6xl bold ' style={{fontFamily: 'Montserrat, sans-serif'}}>10.4 ETH</h1>
              <p className='text-xl font-serif'>Vidyasagar House</p>
              <p className='text-lg font-serif'>House Residence near 25 para Building, near 25 para Building a Building, Kolkata</p>
              <div className='cursor-pointer mt-3 font-thin text-xl'>
                   Click here to submit Document
              </div>
          </div>
        </div>
        <div className='text-center '>
          <button className={style.button}>Verify Document</button>
        </div>
    </div>
  )
}

export default Verify