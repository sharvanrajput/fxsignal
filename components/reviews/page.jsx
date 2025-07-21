

"use client"

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaStar } from "react-icons/fa6";
import quote from "@/public/img/Quote.png";
import Image from 'next/image';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Full-Time Trader',
    image: '/img/user1.png',
    star: 5,
    text: `"The signals are highly reliable, providing precise entry and exit points with excellent risk management strategies. I've seen consistent profitability, and the dedicated customer support team is always available to assist with quick responses and expert guidance!"`,
  },
  {
    name: 'Sam R.',
    role: 'Stock Market Trader',
    star: 4,
    image: '/img/user2.png',
    text: `"In just two months, I doubled my trading profits with FX Signals! Their highly accurate signals and expert insights transformed my strategy, giving me the confidence to trade smarter and more profitably."`,
  },
  {
    name: 'Sam R.',
    role: 'Stock Market Trader',
    star: 4,
    image: '/img/user3.png',
    text: `"FX Signals has provided consistently profitable signals, helping me make better trading decisions with confidence. The accuracy and reliability of their trade setups have significantly improved my results, and I now see steady, sustainable growth in my trading account"`,
  },
];

const page = () => {


  return (
    <>
      <section className="review py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container relative px-4 sm:px-6 lg:px-8 ">
          <div className=" mb-8 sm:mb-12">
            <h2 className=" text-4xl lg:text-5xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[100px] sm:before:w-[150px] md:before:w-[200px] before:h-[20px] sm:before:h-[25px] md:before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">
              Success Stories
            </h2>
            <p className="text-para-dark mt-4 sm:mt-6 text-base sm:text-lg md:text-xl ">
              Real Results. Real Traders. See how FX Signals is transforming trading journeys worldwide!
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { 
                  slidesPerView: 1,
                  spaceBetween: 20 
                },
                768: { 
                  slidesPerView: 1,
                  spaceBetween: 25 
                },
                1024: { 
                  slidesPerView: 1.2,
                  spaceBetween: 30 
                },
                1280: { 
                  slidesPerView: 1.5,
                  spaceBetween: 35 
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-r from-black to-heading-c2 text-white rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between shadow-lg min-h-[300px] sm:min-h-[350px] md:min-h-[350px]">
                    <div className="flex flex-col sm:flex-row gap-6  h-full">
                      <div className="flex-shrink-0 text-center ">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl object-cover mx-auto sm:mx-0"
                        />
                        <h4 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-4 md:mt-5">
                          {item.name}
                        </h4>
                        <p className="text-yellow-400 text-sm sm:text-base">
                          {item.role}
                        </p>
                        <div className="flex items-center justify-center gap-1">
                            {[...Array(item.star)].map((_, i) => (
                              <FaStar key={i} className="text-amber-400 text-sm sm:text-base" />
                            ))}
                          </div>
                      </div>
                      
                      <div className="flex-1 relative flex flex-col justify-between">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-2">
                          {item.text}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          
                          <div className="flex-shrink-0">
                            <Image 
                              src={quote} 
                              alt="quotes" 
                              width={30}
                              height={30}
                              className="w-6 h-6 sm:w-8 sm:h-8 opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default page