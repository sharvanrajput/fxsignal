
import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";


const page = ({ btntext }) => {
  return (
    <>
      <button className='bg-heading-c1 flex px-10 py-3  rounded-lg active:scale-[.98] cursor-pointer'> <span className='text-white'> {btntext} </span> <RxArrowTopRight className='ms-3 bg-white text-black rounded-full font-bold p-1 w-6 h-6  ' /></button>
    </>
  )
}

export default page
