import React from 'react';
import Image from 'next/image';
import Img from '../../Images/C1.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import Link from 'next/link';


const Header = () => {
  return (
    <div className='pt-40  bg-white text-slate-400 flex flex-row justify-center items-center text-center h-screen' style={{backgroundImage:`url(https://s.zillowstatic.com/pfs/static/footer-art.svg)`,backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:"bottom"}}>
      <div className='relative bottom-20' >
            <h1 className='text-5xl text-cyan-500 font-serif font-bold'> Find it. Tour it. Own it.</h1><br/>
            <p className='text-2xl text-slate-700 font-mono'>
              Select your goal and we'll guide you on your journey.We are continuously working 
            </p>
            <p className='text-2xl text-slate-700 font-mono'> to improve feedback and accommodation requests</p><br/>
            <div className='list-none flex flex-row  w-96 justify-evenly mx-auto'>
            <Link href=""> <li className='text-3xl font-serif text-slate-100 rounded-full p-5 text-center bg-slate-800'><BsFacebook/></li></Link>
            <Link href=""> <li className='text-3xl font-serif text-slate-100 rounded-full p-5 text-center bg-slate-800'><BsLinkedin/></li></Link>
            <Link href=""><li className='text-3xl font-serif text-slate-100 rounded-full p-5 text-center bg-slate-800'>< BsYoutube/></li></Link>
            <Link href=""><li className='text-3xl font-serif text-slate-100 rounded-full p-5 text-center bg-slate-800'><BsInstagram/></li></Link>

            </div>
      </div>
     
    </div>
  )
}

export default Header