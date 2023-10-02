import React from 'react'

const WhyUs = () => {
  return (
    <section className="row_why">
        <div className="container">
            <div className="main_title">
                <h2>Why Us</h2>
                <div className='shape'></div>
            </div>
            <div className="boxs">
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/france.png" alt=" France Metal" />
                    </div>
                    <h3>Agent France Metal</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/dierre.png" alt="dierre" />
                    </div>
                    <h3>Agent dierre</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Group 38.svg" alt="#" />
                    </div>
                    <h3>Speed ​​of response to requests</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Mask Group 1.svg" alt="#" />
                    </div>
                    <h3>Speed ​​of supply and installation</h3>
                </div>
                <div className="box" data-aos="flip-left"
     data-aos-duration="1500">
                    <div className="img">
                        <img src="/images/Mask Group 2.svg" alt="#" />
                    </div>
                    <h3>After-sales service</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs