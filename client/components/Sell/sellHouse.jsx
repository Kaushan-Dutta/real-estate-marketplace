import React,{useCallback,useState} from 'react';
import C1 from '../../Images/C1.jpg';
import Image from 'next/image';
import {useDropzone} from 'react-dropzone';
import imageToBase64 from 'image-to-base64/browser';


const style={
    textBox:`mb-2 w-full border border-solid px-5 py-2 rounded-md shadow-lg hover:border-none`,
    button:`bg-cyan-500 text-gray-100 text-2xl rounded-md px-5 py-2 font-sans shadow-md mt-2 w-full`,
    text:`text-center font-serif font-bold text-xl mt-3`,
    image:`border-2 rounded-xl object-contain`,
    form:`flex flex-row justify-around items-center`,
    wrapper:`text-lg font-sans font-bold text-slate-700`,
    flex:`flex flex-row justify-between items-center mb-2`

}
const encodedBase64 ='';
const sellHouse = () => {

  const [image,setImage]=useState(C1);
  const onDrop=useCallback(async(acceptedFiles)=>{
    
    let fileReader = new FileReader();
        fileReader.readAsDataURL(acceptedFiles[0]);
 
        fileReader.onload = (event) => {
            console.log(event.target.result);
        }
    
    setImage(URL.createObjectURL(acceptedFiles[0]))
  },[])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div className='my-10'>
        <form className={style.form}>
            <div className={style.wrapper}>
                <p className='mb-2'>House Name</p>
                <input type="text" placeholder='Enter your text' className={style.textBox}/>
                <p className='mb-2'>Address</p>
                <input type="text" placeholder='Enter your text' className={style.textBox}/>
                <div className={style.flex}>
                    <div className=''>
                        <p className='mb-2'>House No.</p>
                        <input type="text" placeholder='Enter your text' className={style.textBox}/>
                    </div>
                    <div className='ml-2'>
                        <p className='mb-2'>Pincode</p>
                        <input type="text" placeholder='Enter your text' className={style.textBox}/>
                    </div>
                </div>
                <p className='mb-2'>Selling Price</p>
                <input type="text" placeholder='Enter your text' className={style.textBox}/>
                <button className={style.button}>Submit</button>
            </div>
            <div className='text-center '{...getRootProps()}>
                 <input {...getInputProps()}/>
                 <Image src={image} width={450} height={450} className={style.image} />
                 <p className={style.text}>Upload Image</p>
            </div>
        </form>
        <img src={`data:image/jpeg;base64,${encodedBase64}`}></img>
         </div>
  )
}

export default sellHouse
