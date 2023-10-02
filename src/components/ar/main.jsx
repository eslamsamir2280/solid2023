import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Main = () => {
  return (
    <section style={{direction:"rtl"}} className="row_main" id='home'>
        <div className="container">
            <div className="left" data-aos="fade-left"
     data-aos-duration="2000">
                <h1>سوليد للتوكيلات التجارية</h1>
                <p>تعتبر شركتنا الرائدة في مجال تصنيع الأبواب المصفحة الآمنة، والأبواب المقاومة للحريق، وأبواب الأشعة X-ray، والأبواب العازلة للصوت، والمضادة للرصاص. نحن ملتزمون بتوفير منتجات عالية الجودة ومبتكرة لعملائنا.</p>
            </div>
            <div className="right" data-aos="fade-right"
     data-aos-duration="2000">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/z17fgykurwoplj5kak3s.webp" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/y3pep5hurohlvuidovvg.webp" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/elvw3oodppv1xwnjwont.webp" alt='#'/></SwiperSlide>
      </Swiper>
       </div>
          <a href="#about" aria-label="down" class="go-down">
      <div className='down'>
          <i class="uil uil-angle-double-down"></i>
      </div>
        </a>
        </div>
        </section>
  )
}

export default Main