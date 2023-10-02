import React from 'react'
import NavBar from '../components/ar/navBar'
import Main from '../components/ar/main'
import About from '../components/ar/about'
import WhyUs from '../components/ar/why'
import Products from '../components/ar/products'
import Client from '../components/ar/client'
import Portfolio from '../components/ar/Portfolio'
import Acc from "../components/ar/acc";
import Contact from '../components/ar/contact'
import Footer from '../components/ar/footer'
import { Helmet} from "react-helmet-async";
const ar = () => {
  return (
    <>
      <Helmet>
        <title>سوليد للتوكيلات التجارية</title>
        <meta
          name="description"
          content="شركة سوليد للتوكيلات التجارية هي شركة رائدة في توريد وتركيب الأبواب المصفحة والأبواب المقاومة للحريق وأبواب الأشعة والأبواب العازلة للصوت والمضادة للرصاص بجودة عالية. تعتبر الشركة وكيل معتمد لدى France Metal و Dierre. من خلال الالتزام بأعلى معايير الجودة والخدمة المتميزة، تتميز شركة سوليد بتقديم خدمات تركيب الأبواب المتكاملة للعديد من العملاء."
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
export default ar