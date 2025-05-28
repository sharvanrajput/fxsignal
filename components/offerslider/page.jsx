"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <div className="bg-yellow-100 rounded-xl p-10 text-center text-xl font-semibold shadow-lg">
              Slide {i}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default page;
