import React from 'react';
import Image from 'next/image';
import C1 from '../../Images/C1.jpg'
import C2 from '../../Images/C2.jpg'
import C3 from '../../Images/C3.jpg'
import C4 from '../../Images/C4.jpg'
import C5 from '../../Images/C5.png'

const About = () => {
  const aboutAPI=[
    {
      image:C1,
      name:'Buy a home',
      description:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
    },
    {
      image:C1,
      name:'Buy a home',
      description:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
    },
    {
      image:C1,
      name:'Buy a home',
      description:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
    },
    {
      image:C1,
      name:'Buy a home',
      description:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
    },{
      image:C1,
      name:'Buy a home',
      description:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
    }]

  return (
    <div className=' bg-gray-50 px-40 py-20 pt-40'>

      <div className='text-center'>
        <p className='font-serif text-lg'>Our Service</p>
        <h1 className='font-serif font-bold text-5xl text-cyan-500'>Explore out Work</h1>
        <br/>
      </div>

    <div className=' flex flex-row justify-center  flex-wrap'>




      {aboutAPI.map((object,id)=>(

            <div className='  bg-white shadow-md rounded-md px-20 py-10 text-center  mt-14 mx-10' key={id} style={{width:"50vh",height:"60vh"}}>
                <Image src={object.image} className='w-60 mx-auto'/>
                <br/>
                <h1 className='font-serif text-2xl'>{object.name}</h1>
                <br/>
                < p style={{fontFamily: 'Montserrat, sans-serif'}} className='text-lg '>{object.description}</p>
                <br/>
                <button className='px-10 py-2 bg-cyan-500 text-lg text-slate-100 font-serif rounded-md shadow-md'>Browse Homes</button>
            </div>

      ))}
     

    </div>
    </div>
  )
}

export default About