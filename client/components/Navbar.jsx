import React, { useState,useEffect,useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Data } from '@/pages/_app';

const style={

    container:`w-screen h-32 px-40 py-10 bg-black text-slate-200 flex flex-row  items-center fixed shadow-md z-10`,
    wrapper:`flex flex-row justify-between items-center w-full`,
    list:`flex flex-row justify-between  w-1/5 list-none px-10 text-xl`,
    text:`w-1/3 flex flex-row justify-center `,
    button:`px-10 py-2 rounded-md bg-cyan-500`,
    image:`w-10 rounded-full relative left-10 cursor-pointer`

}
const Navbar = () => {

  const router=useRouter();
  const {status,contract,provider,account,connectWallet}=useContext(Data);

  const [path,setPath]=useState('/');

  useEffect(()=>{
    console.log(router.pathname);
    setPath(router.pathname)
  },[router.pathname])

  return (
    <div className={style.container} >
        <div className={style.wrapper} >
            <div className={style.list} style={{fontFamily: 'Montserrat, sans-serif'}}>
              <li className={path=='/'?'text-cyan-500':''}><Link href="/">Home</Link></li>
              <li className={path.startsWith("/buy")?'text-cyan-500':''}><Link href="/buy">Buy </Link></li>
              <li><Link href="/sell" className={path=='/sell'?'text-cyan-500':''}> Sell</Link></li>
              <li><Link href="/verify" className={path=='/verify'?'text-cyan-500':''}> Verify</Link></li>

              {/* <li><Link href="">Auction</Link></li>
              <li><Link href="">Rent</Link></li>
              <li><Link href="">Prediction</Link></li> */}

            </div>
            <div className={style.text+'text-3xl'} style={{fontFamily: 'Montserrat, sans-serif'}}>
                <h1>Zwillo</h1>
            </div>
            <div className={style.text+ 'text-xl'} style={{fontFamily: 'Montserrat, sans-serif'}}>
                 <button className={style.button} onClick={connectWallet}>{
                     account?account.slice(0,5)+"..."+account.slice(-5,):"Connect Wallet"}</button>
                 <img src={"https://avatars.dicebear.com/api/identicon/"+"1"+".svg" } className={style.image}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar