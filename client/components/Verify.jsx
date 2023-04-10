import React from 'react'
import C1 from '../Images/C1.jpg';
import Image from 'next/image';
import Link from 'next/link';

const style={
    wrapper:`bg-slate-500 px-10 py-5 rounded-md shadow-md my-5 flex flex-row justify-around items-center`,
    image:`rounded-full w-10 h-10`,
    address:`w-7/12 text-lg text-slate-200 font-serif`,
    button:`rounded-md bg-cyan-500 px-6 py-2 text-lg text-slate-200 mx-5`
}
const Verify = () => {
  return (
    <div className='pt-40 px-40'>
       
        <div className={style.wrapper}>
          <div className='w-1/12'>
              <Image src={C1}  className={style.image}/>
          </div>
          <div className={style.address}>
             <p>Dutta House, 24 Batanagar Street Kolkata-700137 </p>
          </div>
          <div className='w-4/12 flex flex-row justify-center'>

            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}} ><Link href="">Verify</Link></button>
            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}} >Accept</button>
            <button className={style.button} style={{fontFamily: 'Montserrat, sans-serif'}} >Decline</button>

          </div>
        
      </div>
      
        
    </div>
  )
}

export default Verify