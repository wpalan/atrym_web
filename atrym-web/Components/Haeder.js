import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
    return (
        <section className="py-12">
            <div className="w-full">
        <Swiper
            centeredSlides={true}
            autoHeight={true}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
        
        <SwiperSlide>
        <div className="flex w-full h-full justify-center align-middle items-center">
            <img src="/images/atrym banner.jpeg" className="h-full w-[550px] object-cover"></img>
        </div>
            </SwiperSlide>
        
        
        <SwiperSlide>
        <div className="flex w-full h-full justify-center align-middle items-center">
            <img src="/images/perfume_fondo_c1.jpg" className="w-[550px]"></img>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="flex w-full h-full justify-center align-middle items-center">
            <img src="/images/fracos_1.jpg" className="w-[550px] h-[280px]"></img>
        </div>
        </SwiperSlide>
            
        
            </Swiper>
        </div>
      </section>
    );
  };

