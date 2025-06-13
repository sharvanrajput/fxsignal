import React from 'react'
import cta2_img from '@/public/img/cta2_img.png'
import Image from 'next/image'

const Cta2 = () => {
  return (
    <section className=" pb-20">
      <div className="container">
        <div className=" z-0 bg-gradient-to-r from-yellow-200 to-light-yellow rounded-4xl overflow-hidden">
          <div className="bg-[url('/img/cta2_bg.png')]  grid md:grid-cols-2 grid-cols-1 bg-cover bg-center bg-no-repeat md:px-20 md:pt-10  p-0 pb-2">
            <div className="self-center">
              <h2 className="text-4xl mb-3 font-bold">Join FXSignals Today</h2>
              <p className="text-heading-c1 mb-5">
                Get your brokerage verified and advertised to a global <br /> audience of traders.
              </p>
              <button className="py-2 px-10 w-fit text-center  cursor-pointer rounded-full bg-gradient-to-tl text-white text-lg mt-3 from-heading-c2 to-black active:scale-[0.98]">
                Register  as  Partner
              </button>
            </div>
            <div>
              <Image
                src={cta2_img}
                alt="Call to Action Image"
                className="w-[75%]   object-cover ms-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta2
