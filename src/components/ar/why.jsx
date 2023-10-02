import React from 'react'
const WhyUs = () => {
  return (
    <section style={{direction:"rtl"}} className="row_why">
        <div className="container">
            <div className="main_title">
                <h2>لماذا نحن</h2>
                <div className='shape'></div>
            </div>
            <div className="boxs">
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/france.png" alt=" France Metal" />
                    </div>
                    <h3>وكيل فرانس ميتال</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/dierre.png" alt="dierre" />
                    </div>
                    <h3>وكيل dierre</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Group 38.svg" alt="#" />
                    </div>
                    <h3>سرعة الرد على الطلبات</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Mask Group 1.svg" alt="#" />
                    </div>
                    <h3>سرعة التوريد و التركيب
</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Mask Group 2.svg" alt="#" />
                    </div>
                    <h3>خدمات ما بعد البيع</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs