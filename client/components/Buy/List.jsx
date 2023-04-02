import React,{useState} from 'react';
import GetFlats from './getFlats';
import GetHouse from './getHouse';
const List = () => {

    const [value,setValue]=useState(1);
    const changeState=()=>{
      if(value==1){
        setValue(2);
      }
      else{
        setValue(1)
      }
    }
   
  return (
    <div className='pt-40 px-40'>
        <div className='mx-auto w-96 rounded-md bg-gray-100 px-10 py-5 font-semibold flex flex-row justify-between items-center text-xl'>

                <button className={value==1?'text-cyan-500':''} onClick={changeState}>View House</button>
                <button className={value==2?'text-cyan-500':''} onClick={changeState}>View Appartment</button>

        </div>
        {value==1?<GetHouse/>:<GetFlats/>}
    </div>
  )
}

export default List