import React from 'react'

const Footer = () => {
  return (
    <div className="row_footer">
        <div className="container">
            <div className="flex">
                <div className="col">
                <img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694965854/gorvpai3ruk0ct1uvvfz.webp" alt="" className='logo' />
                <div className="adress">
                    <img src="/images/Group 16985.svg" alt="#" />
                    <p>9 El Obour Buildings Salah Salem st , Madinet Nasr, Cairo</p>
                </div>
            </div>
       <div className='footer_flex'>
             <div className="col links">
                 <h3>Links</h3>
                 <div className='links-div'>
                     <a href="#about">
                         about Us
                     </a>
                     <a href="#Contact">
                         Contact Us
                     </a>
                     <a href="#Products">
                         Products
                     </a>
                     <a href="#Portfolio">
                         Our Portfolio
                     </a>
                     
                 </div>
             </div>
             <div className="col contact">
                 <h3>Contact Us</h3>
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
                 <div className="text">Always keep in touch with us and know <br /> the latest developments And private <br /> business activities and the latest news</div>
                 <div className="icons">
                     <a href="!#"><img src="/images/svgexport-10 (4).png" alt="#" /></a>
                     <a href="!#"><img src="/images/svgexport-6 (5).png" alt="#" /></a>
                 </div>
             </div>
       </div>
            </div>
            <div className='line'></div>
            <div className='hukok'>
                <p>© 2023 - All Right reserved - Solid</p>
                <p><a href="https://www.facebook.com/profile.php?id=100049581704301">eslam samir</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer