"use client"
import logo from "../public/images/logo.png"
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import Image from 'next/image'
import './globals.css'
import { useAccount, useEnsName, useEnsAvatar, useConnect, useDisconnect } from "wagmi"

export default function Home() {
  const {open,close} = useWeb3Modal();
  const { address, connector, isConnected } = useAccount()

  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <main className="min-h-screen flex lg:flex-row md:flex-col justify-center items-center">
      <div className="min-h-screen w-full bg-hero-image bg-cover flex flex-col justify-center items-center ">
        <Image src={logo} 
        width={300}
        height={300}
        alt="Coffee and Coffee Beans"/>
      <h1 className='text-yellow-700 mb-2 font-extrabold text-5xl mx-6'>DECEN : Buy Me Coffee</h1>
      <p className=" mx-36  font-normal text-center">A cute little project where you can support your fav creator (me 😙) by sending some MATIC on Mumbai testnet. </p>
      <button onClick={() => open()} className='mt-4 mx-6 px-4 py-2 bg-yellow-700 hover:bg-yellow-800 ease-in-out duration-200 delay-200 hover:scale-95 text-white font-semibold w-fit rounded-lg'>{isConnected? "Connected" :"Connect Wallet"}</button>
      
      </div>
      <div className='min-h-screen w-full  bg-pattern-bg bg-cover  flex items-center justify-center '>
        {isConnected?(
          <form className="bg-white shadow-2xl rounded-xl px-8 py-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"

             
            >
              Would love a message!
            </label>

            <textarea
              className="form-textarea mt-1 block w-full shadow appearance-none py-2 px-3 border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
              placeholder="Message"
              id="message"
            
              required
            ></textarea>
          </div>

          <div className="flex items-left justify-between">
            <button
              className="ease-in-out duration-200 delay-200 hover:scale-95 bg-yellow-700 hover:bg-yellow-800 text-center text-white font-semibold py-2 px-4 rounded-lg "
              type="button">
              Support $5
            </button>
          </div>
        </form>
        ):(<div className="bg-white shadow-2xl rounded-xl px-8 py-8 mb-4"><h1 className="text-slate-700 font-bold text-xl" >🚨 Please Connect your wallet first!</h1></div>)}
      </div>

      
    
    </main>
  )
}
