import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
import unlock_premium_card from '@/public/img/unlock_premium_card.png'

const Primum_card = () => {
  return (
    <div className="  mx-auto bg-[#2F2A22]  rounded-3xl py-10 text-white text-center ">
      <div className="w-full mb-4">
        <Image
          src={unlock_premium_card}
          alt="Premium Chart"
          width={300}
          height={200}
          className="mx-auto"
        />
      </div>

      <h2 className="text-3xl  mb-4 font-semibold text-yellow-400">
        Unlock Premium Signals &<br /> Maximize Profits
      </h2>

      <ul className="flex flex-col justify-center items-center gap-3  mb-4 text-left">
        <li className="flex text-lg items-center gap-2 text-para">
          <FaCheckCircle className="text-yellow-400" />
          <span >High-Accuracy Forex Signals </span>
        </li>
        <li className="flex text-lg items-center gap-2 text-para">
          <FaCheckCircle className="text-yellow-400" />
          <span >Real-Time Market Updates </span>
        </li>
        <li className="flex text-lg items-center gap-2 text-para">
          <FaCheckCircle className="text-yellow-400" />
          <span > Secure & Fast Transactions </span>
        </li>
      </ul>

      <button className="mt-4 mx-auto bg-yellow-400 text-black font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 hover:bg-yellow-300 transition">
        Check Premium Plan <FaArrowRight />
      </button>
    </div>
  )
}

export default Primum_card
