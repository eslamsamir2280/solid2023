import React from 'react'

const About = () => {
  return (
    <section style={{direction:"rtl"}} className="row_about" id='about'>
        <img src="/images/Group 21.png" className='dec' alt="#"/>
        <div className="container">
            <div className="left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="main_title">
                <h2>من نحن</h2>
                <div className='shape'></div>
            </div>
                <h4>
                    عندما قررنا تأسيس شركة سوليد عام 1998، كان الحلم هو إنشاء علامة "أمان" بكل ما تحمله الكلمة من معنى، أمان للعائلة من السطو، أمان للمصانع والمشاريع الكبرى من الحرائق ، امان لغرف العمليات من الاشعاع ، وتحول الحلم إلى حقيقة بفضل التشكيلة الكبيرة من الأبواب التي تنتجها شركتنا ، من الأبواب المصفحة والأبواب المضاده للأشعة والأبواب المضادة للنار ، الأبواب عازلة الصوت والعديد من الأنواع الأخرى التي تخدم أمان مجتمعنا في أكثر من مجال ، الأمان هو التزامنا تجاه عملائنا.

                </h4>
            </div>
            <div className="right" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694966146/fczjiqrrihzwka7blgvh.webp" alt="#" />
            </div>
        </div>
        <img src="/images/Ellipse 8.webp" className="Ellipse" alt="#" />
    </section>
  )
}

export default About