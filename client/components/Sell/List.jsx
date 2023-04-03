import React, { useState } from 'react';
import Image from 'next/image';
import C1 from '../../Images/C1.jpg';
import Verify from './Verify';

const List = () => {

  const [state,setState]=useState(false);

  const style={
    wrapper:`flex flex-row justify-between px-10 py-5 rounded-md shadow-md bg-slate-500 items-center text-slate-50`,
    button:`px-10 py-3 text-xl text-slate-100 rounded-md bg-cyan-500 font-bold`
  }
  return (
    <div className='px-20 my-5'>
      <div className={style.wrapper}>
          <div className=''>
              <Image src={C1}  className='rounded-full w-10 h-10'/>
          </div>
          <div className='w-4/5'>
             <p>Vidyasagar Home </p>
          </div>
          <div className=''>
            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}} onClick={()=>{setState(true)}}>Get Verified</button>
          </div>
      </div>
      {state?(
      <div className='mx-auto w-6/12 mt-5 border'>
           <Verify setState={setState}/>
      </div>):""}
    </div>
  )
}

export default List