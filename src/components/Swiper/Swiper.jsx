import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={6}
        className="mySwiper"
      >
        <SwiperSlide><img className="" src="/icon/logoo1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logou2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logoo3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logoo4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logoo5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logoo7.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logou8.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="" src="/icon/logou9.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
