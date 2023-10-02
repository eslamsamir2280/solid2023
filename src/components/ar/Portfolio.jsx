import React from 'react'
import DataEn from '../../portfolio'
const Portfolio = () => {
  return (
    <section style={{direction:"rtl"}} className='row_Portfolio' id='Portfolio'>
        <div className="container">
            <div className="main_title">
                <h2>سابقة الأعمال</h2>
                <div className='shape'></div>
            </div>
            <div className="boxs">
           {DataEn.length >= 1 ? DataEn.map((item => {
    return(
        <div key={item.id} className="box"data-aos="fade-up"
     data-aos-duration="2000">
                    <img src={item.img} loading='lazy' alt="" />
                    <div className='text'>
                        <p>
{item.ar}</p>
                    </div>
                </div>
    )
})) : null}
            </div>
        </div>
    </section>
  )
}

export default Portfolio