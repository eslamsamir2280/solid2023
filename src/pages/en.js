import React from 'react'
import NavBar from "../components/en/navBar";
import Main from '../components/en/main';
import About from '../components/en/about';
import WhyUs from '../components/en/why';
import Products from '../components/en/Products';
import Client from '../components/en/client';
import Portfolio from '../components/en/Portfolio';
import Acc from '../components/en/acc';
import Contact from '../components/en/contact';
import Footer from '../components/en/footer';
import { Helmet} from "react-helmet-async";
 const en = () => {
  return (
    <>
    <Helmet>
      <title>Solid for agencies</title>
      <meta
        name="description"
        content="Solid Company for Commercial Agencies is a leading company in the supply and installation of armored doors, fire-resistant doors, radiation doors, soundproof doors, and bulletproof doors with the highest quality. The company is an authorized agent for France Metal and Dierre. Through its commitment to the highest quality standards and excellent service, Solid Company is known for providing comprehensive door installation services to many clients."
        />
        <meta name="keywords" content="ابواب,حريق,أشعة,عازل للصوت,مصفح,أمان,ضد الرصاص,فرانس ميتال,ايطالى,اكسسوارات ابواب,طوارىء,Panic Bar,Door closer,Emergency,Doors hardware,Italian,Door closer,France metal,Security,Steel,X-Ray,Fire,Doors"></meta>
        </Helmet>
      <div className="bottom_icons">
        <a href="https://wa.me/+201221932532">
          <img src="images/whatsapp.webp" alt="#" />
        </a>
        <a href="#home">
          <img src="images/up-arrow.webp" alt="#" className="up" />
        </a>
      </div>
      <NavBar />
      <Main />
      <About />
      <WhyUs />
      <Products />
      <Acc />
      <Portfolio />
      <Client />
      <Contact />
      <Footer />
    </>
  ); 
}
export default en