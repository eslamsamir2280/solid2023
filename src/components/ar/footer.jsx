import React from 'react'

const Footer = () => {
  return (
    <div style={{direction:"rtl"}} className="row_footer">
        <div className="container">
            <div className="flex">
                <div className="col">
                <img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694965854/gorvpai3ruk0ct1uvvfz.webp" alt="" className='logo' />
                <div className="adress">
                    <img src="/images/Group 16985.svg" alt="#" />
                    <p>9 عمارات العبور- شارع صلاح سالم - مدينة نصر - القاهرة</p>
                </div>
            </div>
       <div className='footer_flex'>
             <div className="col links">
                 <h3>الروابط</h3>
                 <ul>
                     <a href="#about">
                         <li>من نحن</li>
                     </a>
                     <a href="#Contact">
                         <li>تواصل معنا</li>
                     </a>
                     <a href="#Products">
                         <li>المنتجات</li>
                     </a>
                     <a href="#Portfolio">
                         <li>سابقة الأعمال</li>
                     </a>
                     
                 </ul>
             </div>
             <div className="col contact">
                 <h3>تواصل معنا</h3>
                 <div>
                     <img src="/images/Group 16997.svg" alt="#" />
                     <p>info@solidsteeldoors.com</p>
                 </div>
                 <div>
                     <img src="/images/Group 16988.svg" alt="#" />
                     <p>+201062898833</p>
                 </div>
             </div>
             <div className="col">
                 <h3>Follow Us</h3>
                 <div className="text">ابقى على تواصل معنا دائما <br /> وتعرف على آخر التطورات والأنشطة<br /> التجارية الخاصة وآخر الأخبار</div>
                 <div className="icons">
                     <a href="!#"><img src="/images/svgexport-10 (4).png" alt="#" /></a>
                     <a href="!#"><img src="/images/svgexport-6 (5).png" alt="#" /></a>
                 </div>
             </div>
       </div>
            </div>
            <div className='line'></div>
            <div className='hukok'>
                <p>سوليد - جميع الحقوق محفوظة - © 2023</p>
                <p><a href="https://www.facebook.com/profile.php?id=100049581704301">eslam samir</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer