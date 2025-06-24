import Link from 'next/link'
import React from 'react'


const Technicalandfundamental = () => {
  return (
    <div className=" border-2 py-5 mt-4  border-[#999890] px-5 rounded-2xl bg-gradient-to-b from-yellow-50/10 to-yellow-50">

      <h4 className="text-2xl font-bold pt-4 pb-2" >Advertise With Us</h4>

      <ul className=' mb-5'>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="/market-sentiments">Market Sentiments </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="/position-sizing-and-leverage">Position Sizing & Leverage </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="/setting-stop-loss-and-take-profit"> Setting Stop-loss & take profit</Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Managing Psychology </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Volatile Market mitigation </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Psychological Barriers </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Economic Indicators </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href=""> Chart Types</Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href=""> Interest Rates</Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Advance Trading Strategies </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Support & Resistance Levels </Link></li>
        <li className='inline-block mt-7 me-2'> <Link className=' bg-[#eeead6] px-4 text-sm py-3 text-heading-c1 rounded-full' href="">Fundamental & Technical </Link></li>
       
      </ul>

    </div>
  )
}

export default Technicalandfundamental

