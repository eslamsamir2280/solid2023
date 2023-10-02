import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Products = () => {
  return (
    <section className="row_products" id='Products'>
        <div className="container">
             <div className="main_title">
                <h2>Products</h2>
                <div className='shape'></div>
            </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Fire rated doors</h3>
                <p>France Metal offers a complete range of standard hollow metal doors in face sheet gauges ranging from 18 to 14 (1.25 mm to 2 mm).
France Metal has variety of core choices including honeycomb, polyurethane foam and temperature rise cores.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/elvw3oodppv1xwnjwont.webp" loading='lazy' alt='hollow metal doors'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695731342/r6yyn1voegwwfyv476jy.webp" loading='lazy' alt='hollow metal doors'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>safety doors</h3>
                <p>Prestige is the heart of Dierre’s best doors.
Every detail is produced and researched, an advantage that allows us flexibility, but also rigor in the care we pay to every detail.
The combination of each safety feature offers a truly advanced line
Architectural size :  103 x 217 cm
Shutter size :  92x210 cm
</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/z17fgykurwoplj5kak3s.webp" alt='safety doors'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963771/xkpcyau1gah4dcytfvnh.webp" alt='safety doors'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963772/rzv2wx8m6o6hkaytwpr4.webp" alt='safety doors'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>X-RAY Doors</h3>
                <p>Achieve effective radiation protection with the France Metal full line of high quality lead lined doors and frames. These openings accomplish the important task of reliably containing radiation in sensitive areas.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963767/mooreb3r2ualh3fizdwc.webp" loading='lazy' alt='X-RAY Doors'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695731986/sydess8jzv4ajfsajtj6.webp" loading='lazy' alt='X-RAY Doors'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Stainless steel Doors</h3>
                <p>Stainless-Tech by France Metal gives architects and designers a sleek aesthetic option to satisfy today’s style preferences. The complete, high-quality stainless steel door and frame system is ideal for commercial, institutional, and high style environments.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963771/hftzhvtw46vrltzmclyq.webp" loading='lazy' alt='Stainless steel Doors'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Acoustical Doors</h3>
                <p>Using the latest technology in light weight sound absorbing techniques, France Metal has developed acoustical assemblies to be the noise solution for any facility.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53191021083_604ea2ed51_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695732231/byoj13gszr4wu9s7kc3e.webp" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Armor Shield™</h3>
                <p>Level 1 through Level 3 bullet resisting door and frame (UL 752).
The Armor-Shield System provides cost-efficient readily available protection against assault and vandalism at vulnerable door openings</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849305_afe97f1738_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Products