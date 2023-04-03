import React from 'react';
import C1 from "../../Images/C1.jpg";
import Image from 'next/image';
import Link from 'next/link';
import {CiLocationArrow1 } from 'react-icons/ci';
import { BsCircleFill } from 'react-icons/bs';

const message=[
  {owner:true,message:"This is the approved house"},
  {owner:false,message:"Where is the house?"},
  {owner:true,message:"Check the address mentioned"},
  {owner:false,message:"Can I come and visit?"},
  {owner:false,message:"I am not being satisfied by the pictures provided"},
  {owner:false,message:"Is it possible "},
  {owner:true,message:"yes!"},
  {owner:true,message:"Check the address mentioned"},
  {owner:false,message:"Can I come and visit?"},
  {owner:false,message:"I am not being satisfied by the pictures provided"},
  {owner:false,message:"Is it possible "},
  {owner:true,message:"Check the address mentioned"},
  {owner:false,message:"Can I come and visit?"},
  {owner:false,message:"I am not being satisfied by the pictures provided"},
  {owner:false,message:"Is it possible "},
  {owner:true,message:"Check the address mentioned"},
  {owner:false,message:"Can I come and visit?"},
  {owner:false,message:"I am not being satisfied by the pictures provided"},
  {owner:false,message:"Is it possible "},
  {owner:true,message:"Check the address mentioned"},
  {owner:false,message:"Can I come and visit?"},
  {owner:false,message:"I am not being satisfied by the pictures provided"},
  {owner:false,message:"Is it possible "},

]
const PropertyDetail = () => {
  return (
    <div className='p-40 flex flex-row justify-start'>
         <div className='w-2/3 mx-5'>
            <div className='rounded-lg border shadow-lg w-full px-10 py-10 flex flex-row overflow-x-scroll overflow-y-hidden scrollBar '  >
                <Image src={C1} className='border mx-5'/>
                <Image src={C1} className='border mx-5'/>
                <Image src={C1} className='border mx-5'/>
                <Image src={C1} className='border mx-5'/> 
            </div>
            <div className='mt-10 px-10'>
                <div className='flex flex-row  items-center justify-between'>

                     <div className='flex flex-row items-center' style={{fontFamily: 'Montserrat, sans-serif'}}><div className='text-7xl bold ' >10.54 ETH</div></div>
                     <p className='text-2xl font-mono flex flex-row items-center'><BsCircleFill className='text-lg text-red-600'/><span className='mx-5'>For Sale</span></p>
                </div>
                
                <p style={{fontFamily: 'Montserrat, sans-serif'}} className='text-3xl bold my-5'> Dutta House, 4056 E River Rd,Hamilton, OH 45015</p>
                <div className='flex flex-row flex-wrap justify-between list-none'>
                  <li className='px-10 py-3 rounded-md bg-cyan-500 text-lg text-white'>756 sqft</li>
                  <li className='px-10 py-3 rounded-md bg-cyan-500 text-lg text-white '>Central AC</li>
                  <li className='px-10 py-3 rounded-md bg-cyan-500 text-lg text-white '>Garage</li>
                  <li className='px-10 py-3 rounded-md bg-cyan-500 text-lg text-white '>Swimming Pool</li>
                  <li className='px-10 py-3 rounded-md bg-cyan-500 text-lg text-white '>Backyard</li>
                </div>
                <hr className='my-5'/>
                <h1 className='text-3xl mb-5'><b>Overview</b></h1>
                <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <h1 className='text-3xl my-5'><b>Contact Details</b></h1>
                <div className='flex flex-row flex-wrap  '>
                  <li className='mr-5 text-lg'>Phone No: 97297940232</li>
                  <li className='mr-5 text-lg'>Email: kswubsiw@gmail.com</li>
                </div>

            </div>
         </div>
         <div className='mx-5 w-1/3 ' style={{height:"70vh"}}>
           <div className='rounded-lg border h-full shadow-lg w-full px-10 py-10  overflow-x-hidden overflow-y-scroll scrollBar '>
                {message.map((object,id)=>{
                  return(
                    <div className=''>
                      {object.owner?
                            <div className='py-3 rounded-md px-5 my-1  bg-slate-800 w-fit flex flex-row'><p className=' text-white '>{object.message}</p></div>:
                            <div className='  my-1 flex flex-row-reverse'><p className=' text-white rounded-md bg-green-900 py-3  px-5'>{object.message}</p></div>}
                    </div>
                  )
                })}
           </div>
           <div className='mt-5 rounded-3xl shadow-md px-10 py-5 w-full h-20 border flex flex-row items-center justify-between'>
               <input type='text' placeholder='Message' className='text-xl border-none py-1 w-4/5 outline-0'/>
               <button className='rounded-full p-3 bg-cyan-500'><CiLocationArrow1 className='text-2xl text-white'/></button>
           </div>
         </div>
    </div>
  )
}

export default PropertyDetail