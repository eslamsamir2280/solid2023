import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Products = () => {
  return (
    <section style={{direction:"rtl"}} className="row_products" id='Products'>
        <div className="container">
             <div className="main_title">
                <h2>المنتجات</h2>
                <div className='shape'></div>
            </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>الابواب المقاومة للحريق</h3>
                <p>نقدم مجموعة كاملة من الأبواب المعدنية المقاومة للحريق بالعديد من المقاسات القياسية مع مجموعة متنوعة من الحشو الداخلي مثل (الصوف الصخري - البوريثان)</p>
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
                <h3>الأبواب المصفحه</h3>
                <p>الفخامة هي اساس افضل أبواب Dierre's. إن إنتاج كل التفاصيل والبحث فيها هي ميزة تتيح لنا المرونة، ولكن أيضًا الدقة في العناية التي نضعها في كل التفاصيل. إن الجمع بين كل ميزة أمان يوفر خطًا متقدمًا حقًا. الحجم المعماري 
103 x 217 cm
حجم الغالق 
92 x 210 cm
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
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963770/z17fgykurwoplj5kak3s.webp" alt='أبواب مصفحه'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963771/xkpcyau1gah4dcytfvnh.webp" alt='أبواب مصفحه'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963772/rzv2wx8m6o6hkaytwpr4.webp" alt='أبواب مصفحه'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>X-ray أبواب الأشعة
</h3>
                <p>تقدم فرانس ميتال مجموعة كاملة من الأبواب المبطنة بمادة الرصاص عالية الجودة والتي تمتص الإشعاع بشكل موثوق في المباني الحساسة مثل المستشفيات والأمكنة
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
           <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963767/mooreb3r2ualh3fizdwc.webp" loading='lazy' alt='X-ray أبواب الأشعة'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695731986/sydess8jzv4ajfsajtj6.webp" loading='lazy' alt='X-ray أبواب الأشعة'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>أبواب استانليس تيل</h3>
                <p>أبواب استانليس تيل مصنوعة بتقنية الفولاذ المقاوم للصدأ ليكون اختياراً مثالياً وانيقاً للعديد من المباني التجارية والمؤسسات عالية الطراز</p>
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
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694963771/hftzhvtw46vrltzmclyq.webp" alt='أبواب استانليس تيل'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>أبواب عازلة الصوت</h3>
                <p>تستخدم فرانس ميتال أحدث التقنيات في امتصاص الأصوات لتكون الحل الأمثل للضوضاء في أي مبنى خاصة الفنادق والمكاتب</p>
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
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695732341/hmixtwppf2ojujavfrbx.webp" alt='أبواب عازلة الصوت'/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1695732231/byoj13gszr4wu9s7kc3e.webp" alt='أبواب عازلة الصوت'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>الابواب المقاومة للرصاص</h3>
                <p>الباب والاطار مقاومان للرصاص من المسوى 1 إلى المستوى 3 حيث يوفر نظام حماية فعالة ضد الاعتداء والتخريب ومجموعة واسعة من الأسلحة النارية مصنوع من الفولاذ عيار 12</p>
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849305_afe97f1738_o.jpg" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Products