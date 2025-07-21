"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from "@/public/img/offer_slide1.png"
import slide2 from "@/public/img/offer_slide2.png"
import slide3 from "@/public/img/offer_slide3.png"
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full  mx-auto ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}

        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {[slide1, slide2, slide3].map((ele, i) => (
          <SwiperSlide key={i}>
            <div className=" rounded-xl pb-10 text-center text-xl font-semibold ">
              <Image src={ele} width={100 + "%"} height={"auto"} alt="slider" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default page;
