import React from 'react';
import Property from '../Property';

const getHouse = () => {
  const array=[1,2,3,4,7,8]
  return (
    <div className='flex flex-row justify-center flex-wrap'>
        {array.map((object,id)=>(<Property key={id} id={id} heading="getHouse"/>))}
       
    </div>
  )
}

export default getHouse