"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const Gallery = ({ product }) => {
  console.log("Gallery  product:", product);

  return (
    <img style={{ width: 400 }} src={product.img}></img>
    // <section style={{ width: "36%" }}>
    //   <Swiper
    //     style={{
    //       "--swiper-navigation-color": "#fff",
    //       "--swiper-pagination-color": "#fff",
    //     }}
    //     spaceBetween={10}
    //     navigation={true}
    //     thumbs={{ swiper: thumbsSwiper }}
    //     modules={[FreeMode, Navigation, Thumbs]}
    //     className='mySwiper2 gallery-slider'>
    //     <SwiperSlide>
    //       <img src={product.img} />
    //     </SwiperSlide>
    //   </Swiper>

    //   <Swiper
    //     onSwiper={setThumbsSwiper}
    //     spaceBetween={10}
    //     slidesPerView={4}
    //     freeMode={true}
    //     watchSlidesProgress={true}
    //     modules={[FreeMode, Navigation, Thumbs]}
    //     className='gallery-slider-2'>
    //     <SwiperSlide>
    //       <img src={product.img} />
    //     </SwiperSlide>
    //   </Swiper>
    // </section>
  );
};

export default Gallery;
