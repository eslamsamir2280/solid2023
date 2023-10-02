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
       <div className="row_nav" id='nav'>
      <div className="container">
        <div className="nav">
          <a href="#home">
            <img src="https://res.cloudinary.com/defcamc5x/image/upload/v1694965854/gorvpai3ruk0ct1uvvfz.webp"  width="100%"
   height="100%" alt="Solid for agencies" />
          </a>
          <div className="nav_links">
           <a href="#home" className='links'>Home</a>
           <a href="#about" className='links'>About Us</a>
            <a href="#Products" className='links'>Products</a>
            <a href="#Accessories" className='links'>Accessories</a>
            <a href="#Portfolio" className='links'>Our Portfolio</a>
            <a href="#Contact" className='links'>Contact Us</a>
          </div>
        </div>
        <div className="buttons">
          <a href="#Contact"><button>Contact Us</button></a>
          <Link to="/ar">
            <img src="/images/egypt.png" alt='#'  onClick={() => {
              document.getElementById("body").classList.add("ar");
            }}/>
          </Link>
        </div>
           <div class="side-nav" id="sidenav">
          <a href="#home" className='links' onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> Home</a>
         <a href="#about" className='links' onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> About Us</a>
         <a href="#Products" className='links' onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> Products</a>
          <a href="#Portfolio" className='links' onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> Our Portfolio</a>
          <a href="#Contact" className='links' onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}>Contact Us</a>
          <Link to="/ar">
            <img src="/images/egypt.png" alt='#' className='lang_icons' onClick={() => {
              document.getElementById("body").classList.add("ar");
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
    </div>
  )
}
export default navBar