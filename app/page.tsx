"use client"
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import Image from 'next/image'
import './globals.css'
export default function Home() {
  const {open,close} = useWeb3Modal();
  return (
    <main className="min-h-screen flex  justify-center items-center">
      <div className="min-h-screen w-full  flex flex-col justify-center ">
      <h1 className='text-yellow-700 font-bold text-5xl p-6'>DECEN : Buy Me Coffee</h1>
      <p className="p-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis rutrum tincidunt. Phasellus a luctus orci. Fusce vel lorem sed augue sagittis venenatis ut at magna. Aenean euismod ornare ipsum, vel aliquet tellus condimentum at. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      <button onClick={() => open()} className='m-6 px-4 py-2 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold w-fit rounded-lg'>Connect Wallet</button>
      </div>
      <div className='min-h-screen w-full bg-blue-100'></div>
      
      
    
    </main>
  )
}
