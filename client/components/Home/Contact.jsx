import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='bg-black px-40 py-20 text-center text-slate-200 '>

      <div className='flex flex-row flex-wrap list-none mx-auto justify-around text-lg  w-2/3' style={{fontFamily: 'Montserrat, sans-serif'}}>

        <li ><Link href="" >About</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Advertise</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Research</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Terms of use</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Privacy Portal</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Mobile Apps</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Blog</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href=""> Cookie Preference</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">AI</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">StreetEasy</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">HotPads</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link href="">Out East</Link></li>
            

     </div>
     <div className=''>
     <br/>
     <hr/>
     <br/>
      <p>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please</p>
      <br/>
      <Link href="" className='font-sans text-xl font-semibold decoration-dashed'>Contact Zillow, Inc. Brokerage</Link>
     </div>
     
    </div>
  )
}

export default Contact