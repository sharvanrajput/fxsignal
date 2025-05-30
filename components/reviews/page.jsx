"use client"


import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({});

  // Wait for refs to be available before passing to Swiper
  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);
  return (
    <>
      <section className="review py-[80px]">
        <div className="container relative">
          <h2 className="text-4xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[200px] before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Success Stories</h2>
          <p className="text-para-dark my-5 text-lg">Real Results. Real Traders. See how FX Signals is transforming trading journeys worldwide!</p>
          <div className="relative max-w-7xl mx-auto px-4 py-12">
            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onBeforeInit={(swiper) => {
                // Assign navigation manually before Swiper initializes
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1.5 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-r h-full from-black to-heading-c2 text-white rounded-2xl p-6 h-full flex flex-col justify-between shadow-lg">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className=''>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="max-w-[200px] max-h-[200px] rounded-xl object-cover"
                        />
                        <h4 className="text-lg font-bold mt-5">{item.name}</h4>
                        <p className="text-yellow-400">{item.role}</p>
                      </div>
                      <div className='relative'>
                        <p className="text-sm md:text-base  md:mb-4 mb-0">{item.text}</p>
                        <div className="mt-6 w-full md:absolute md:top-[40%]">
                          <div className="flex justify-between">
                            <div className='flex items-center  '>
                              {[...Array(item.star)].map((_, i) => (
                                <FaStar key={i} className='text-amber-400' />
                              ))}
                            </div>
                            <div className=''>
                              <Image src={quote} alt='quots' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 md:-left-[50px] left-[0px]  -translate-y-1/2 z-10">
              <button
                ref={prevRef}
                className="bg-yellow-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-500"
              >
                <FaArrowLeft />
              </button>
            </div>

            <div className="absolute top-1/2 md:-right-[50px] right-[0px]  -translate-y-1/2 z-10">
              <button
                ref={nextRef}
                className="bg-yellow-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-500"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
