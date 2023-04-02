import React from 'react';
import Image from 'next/image';
import C1 from '../../Images/C1.jpg';

const List = () => {
  const style={
    wrapper:`flex flex-row justify-between px-10 py-5 rounded-md shadow-md bg-slate-500 items-center text-slate-50`,
    button:`px-10 py-3 text-xl text-slate-100 rounded-md bg-cyan-500 font-bold`
  }
  return (
    <div className='px-20'>
      <div className={style.wrapper}>
          <div className=''>
              <Image src={C1}  className='rounded-full w-10 h-10'/>
          </div>
          <div className='w-4/5'>
             <p>Vidyasagar Home </p>
          </div>
          <div className=''>
            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}}>Get Verified</button>
          </div>
      </div>
    </div>
  )
}

export default List