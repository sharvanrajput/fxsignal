import Link from 'next/link'
import React from 'react'


const Forex_related_article = () => {
  return (
    <div className=" border-2 py-5 mt-4  border-[#999890] px-5 rounded-2xl bg-gradient-to-b from-yellow-50/10 to-yellow-50">

      <h4 className="text-2xl font-bold pt-4 pb-3" >Advertise With Us</h4>

      <ul className=' '>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="/history-and-evaluation">History & Evaluation </Link></li>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="">Importance & Rules </Link></li>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="">What are lots in Forex ?</Link></li>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="">What are Pips in the Forex ?</Link></li>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="">How does Forex Market Work ? </Link></li>
        <li className='inline-block bg-[#eeead6] mt-2 me-2  px-4 text-sm py-3 text-heading-c1 rounded-full'> <Link href="">Basics of Currency Trading </Link></li>
      </ul>

    </div>
  )
}

export default Forex_related_article
