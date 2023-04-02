import React from 'react';
import Property from '../Property';

const getFlats = () => {
  const array=[1,2,3,4,5,6,7,8]
  return (
    <div className='flex flex-row justify-center flex-wrap'>
        {array.map((object,id)=>(<Property key={id} id={id} heading="getFlats"/>))}
       
    </div>
  )
}

export default getFlats