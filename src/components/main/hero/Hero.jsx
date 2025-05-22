import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  return (
     <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
              alt="image"
              className="w-full h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="image"
              className="w-full h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg"
              alt="image"
              className="w-full h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default React.memo(Hero)