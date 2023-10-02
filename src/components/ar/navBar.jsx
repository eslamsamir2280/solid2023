import React from 'react'
import { Link } from 'react-router-dom'
 const navBar = () => {
  function scrollHeader() {
  const header = document.getElementById("nav");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
  return (
      <section style={{direction:"rtl"}} className="row_nav" id='nav'>
      <div className="container">
        <div className="nav">
        <a href="#home"><img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694965854/gorvpai3ruk0ct1uvvfz.webp" alt="سوليد للتوكيلات التجارية" /></a>
          <ul className="nav_links">
             <a href="#home"> <li className="links">الرئيسية</li></a>
           <a href="#about"> <li className="links">من نحن</li></a>
            <a href="#Products"><li className="links">المنتجات</li></a>
            <a href="#Accessories"><li className="links">الإكسسوارات</li></a>
            <a href="#Portfolio"><li className="links">سابقة الأعمال</li></a>
            <a href="#Contact"><li className="links">تواصل معنا</li></a>
          </ul>
        </div>
        <div className="buttons">
          <a href="#Contact"><button>تواصل معنا</button></a>
          <Link to="/">
            <img src="/images/united-states.png " alt='#'  onClick={() => {
              document.getElementById("body").classList.remove("ar");
            }} />
          </Link>
        </div>
        <div class="side-nav" id="sidenav">
          <a href='#home'>الصفحة الرئيسية</a>
          <a href='#about'>من نحن</a>
          <a  href="#Products">المنتجات</a>
          <a  href="#Accessories">الإكسسوارات</a>
          <a href="#Portfolio">سابقة الأعمال</a>
          <a href="#Contact">تواصل معنا</a>
          <Link to="/">
            <img src="/images/united-states.png " className='lang_icons ' alt='#'  onClick={() => {
              document.getElementById("body").classList.remove("ar");
            }} />
          </Link> 
        </div>

        <div className="mobile_icons" id="nav_icon">
          <i
            class="uil uil-align-justify"
            id="open"
            onClick={() => {
              document.getElementById("sidenav").classList.toggle("show");
            }}></i>
    </div>
            </div>
    </section>
  )
}
export default navBar