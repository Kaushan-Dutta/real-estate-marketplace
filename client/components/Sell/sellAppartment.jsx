import React,{useCallback,useState,useContext} from 'react';
import C1 from '../../Images/C1.jpg';
import Image from 'next/image';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import { Data } from '@/pages/_app';
import { ethers } from 'ethers';
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const storage = new Web3Storage({ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlFOTBjNkM4OWVkYjBCRDc4ZGUxMGNmMjg0YzAzY0NhMWZjNDYxM0UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzkxMjg2MjEwNzQsIm5hbWUiOiJ3ZWIzVG9rZW4ifQ.pr1X2gh7R1lJb5eJWqX6yuvLP8e7w5V8qqbept7Uj98' });

const style={
    textBox:`mb-2 w-full border border-solid px-5 py-2 rounded-md shadow-lg hover:border-none`,
    button:`bg-cyan-500 text-gray-100 text-2xl rounded-md px-5 py-2 font-sans shadow-md mt-2 w-full`,
    text:`text-center font-serif font-bold text-xl mt-3`,
    image:`border-2 rounded-xl object-contain`,
    form:`flex flex-row justify-around items-center`,
    wrapper:`text-lg font-sans font-bold text-slate-700`,
    flex:`flex flex-row justify-between items-center mb-2`

}
const sellAppartment = () => {

  const {status,contract,provider,account,chain,connectWallet}=useContext(Data);

  const [propertyDetail,setpropertyDetail]=useState({name:'',address:'',propertyNum:'',pinCode:'',sellPrice:'',image:'',isHouse:false})

  const [image,setImage]=useState(C1);
  const [ipfsImage,setIpfsImage]=useState();

  const toWei=(value)=>{
    return(ethers.utils.parseUnits(value.toString(),'ether'))
  }

  const onDrop=useCallback(async(acceptedFiles)=>{
    let fileReader = new FileReader();


    fileReader.readAsDataURL(acceptedFiles[0]);
 
        fileReader.onload = (event) => {
            setpropertyDetail({...propertyDetail,['image']:event.target.result});
        }
    setIpfsImage(acceptedFiles[0]);
    setImage(URL.createObjectURL(acceptedFiles[0]))
  },[])

  let Name,Value;
  const setDetails=async(event)=>{

     Name=event.target.name;
     Value=event.target.value;
     setpropertyDetail({...propertyDetail,[Name]:Value})

  }

  const sendDetail=async(e)=>{

    e.preventDefault();
    const sell=await contract.listingPrice();
    const sellPrice=ethers.utils.formatUnits(sell);

    const newFile = new File([ipfsImage], ipfsImage.name, {type: ipfsImage.type});
    const cid = await storage.put([newFile], {
        name: ipfsImage.name,
    });
    const imageURI = `https://${cid}.ipfs.dweb.link/${ipfsImage.name}`;
    console.log(imageURI,account);

    const sellFlat=await contract.listAsset(imageURI,toWei(propertyDetail.sellPrice),{value:toWei(sellPrice),gasLimit: 5000000});
    const items=await contract.listedItems();
    const numItems=ethers.utils.formatUnits(items)*Math.pow(10,18);

    try{
    const res=await axios.post("http://localhost:3030/sellProperty",{propertyDetail,numItems}, { withCredentials: true });
    console.log(res);
}
    catch(err){
        console.log(err);
    }


  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div className='my-10'>
        <form className={style.form} onSubmit={sendDetail}>
            <div className={style.wrapper}>
                <p className='mb-2'>Appartment Name</p>
                <input type="text" placeholder='Enter your text' className={style.textBox} value={propertyDetail.name} onChange={setDetails} name="name"/>
                <p className='mb-2'>Address</p>
                <input type="text" placeholder='Enter your text' className={style.textBox} value={propertyDetail.address} onChange={setDetails} name="address"/>
                <div className={style.flex}>
                    <div className=''>
                        <p className='mb-2'>Flat No.</p>
                        <input type="text" placeholder='Enter your text' className={style.textBox} value={propertyDetail.propertyNum} onChange={setDetails} name="propertyNum"/>
                    </div>
                    <div className='ml-2'>
                        <p className='mb-2'>Pincode</p>
                        <input type="text" placeholder='Enter your text' className={style.textBox} value={propertyDetail.pinCode} onChange={setDetails} name="pinCode"/>
                    </div>
                </div>
                <p className='mb-2'>Selling Price</p>
                <input type="text" placeholder='Enter your text' className={style.textBox} value={propertyDetail.sellPrice} onChange={setDetails} name="sellPrice"/>
                <button className={style.button}>Submit</button>
            </div>
            <div className='text-center '{...getRootProps()}>
                 <input {...getInputProps()}/>
                 <Image src={image} width={450} height={450} className={style.image} />
                 <p className={style.text}>Upload Image</p>
            </div>
        </form>
    </div>
  )
}

export default sellAppartment