import DataEn from '../../portfolio'
const Portfolio = () => {
    return (
    <section className='row_Portfolio' id='Portfolio'>
        <div className="container">
            <div className="main_title">
                <h2>Our Portfolio</h2>
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
{item.title}</p>
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