"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./banner.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

function Banner() {
  return (<div className={styles.divv}>
    <Swiper
      rewind={true}
      navigation={true}
      loop={true}
      autoplay={{ delay: 1500 }}
      modules={[Navigation, Autoplay]}
      className="mySwiper home-slider"
    >
      <SwiperSlide>
        <img className={styles.image} src='/images/1.jpg' alt='Slide' />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img className={styles.image} src='/images/2.jpg' alt='Slide' />
      </SwiperSlide> */}
      <SwiperSlide>
        <img className={styles.image} src='/images/3.jpg' alt='Slide' />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image} src='/images/4.jpg' alt='Slide' />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image} src='/images/5.jpg' alt='Slide' />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image} src='/images/6.jpg' alt='Slide' />
      </SwiperSlide>
    </Swiper></div>
  );
}

export default Banner;
