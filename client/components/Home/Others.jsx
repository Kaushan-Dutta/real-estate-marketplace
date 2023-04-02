import React from 'react'
import Image from 'next/image';
import C1 from '../../Images/C1.jpg'
import C2 from '../../Images/C2.jpg'
import C3 from '../../Images/C3.jpg'
import C4 from '../../Images/C4.jpg'
import C5 from '../../Images/C5.png'

const Others = () => {
  return (
    <div className=' bg-gray-50 px-40 py-20 pt-40'>

      <div className='text-center'>
        <p className='font-serif text-lg'>Check Out</p>
        <h1 className='font-serif font-bold text-5xl text-cyan-500'>Find what suits You</h1>
        <br/>
      </div>

      <div className='flex flex-row justify-center  flex-wrap'>

        <div className='bg-white rounded-md shadow-md  mt-14 mx-10' style={{width:"50vh"}}>
          <Image src={C1} className='w-full mx-auto'/>
          <div className='px-10 py-5'>  
                  <p>Luxury BackHouse</p>
          </div>

        </div>


      </div>

       

    </div>
  )
}

export default Others