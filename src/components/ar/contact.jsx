import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xwtii9s', 'template_1gv42zk', form.current, '4vXE7JqARSfCY9nFw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <section style={{direction:"rtl"}} className='row_contact' id='Contact'>
        <div className="container">
             <div className="main_title">
                <h2>تواصل معنا</h2>
                <div className='shape'></div>
            </div>
        <div className='contact_flex'>
               <div className="left">
                    <div><iframe width="100%" height="600" title='solid' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9%20El-Orouba,%20Mansheya%20El-Bakry,%20Heliopolis,%20Cairo%20Governorate%204460020+(%D8%B3%D9%88%D9%84%D9%8A%D8%AF%20%D9%84%D9%84%D8%AA%D9%88%D9%83%D9%8A%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
                </div>
                <div className="right">
                    <div className="address">
                       <div className='title'>
                         <img src="/images/Group 16985.svg" alt="#" />
                         <h2>العنوان</h2>
                       </div>
                       <div className="text">
                        <p>9 عمارات العبور- شارع صلاح سالم - مدينة نصر - القاهرة</p>
                       </div>
                    </div>
                    <div className="mail">
                       <div className='title'>
                         <img src="/images/Group 16997.svg" alt="#" />
                         <h2>البريد الإلكتروني</h2>
                       </div>
                       <div className="text">
                        <p>info@solidsteeldoors.com</p>
                        <p>Contact@solidsteeldoors.com</p>
                       </div>
                    </div>
                    <div className="phone">
                       <div className='title'>
                         <img src="/images/Group 16988.svg" alt="#" />
                         <h2>الهاتف</h2>
                       </div>
                       <div className="text">
                        <p>01062898833</p>
                        <p>01221932532</p>
                       </div>
                    </div>
                    <div className='line'></div>
                    <h3 className='bold'>تواصل معنا</h3>
                    <p>إذا كانت لديك أي أسئلة، فلا تتردد في الاتصال بنا. وسوف نقوم بالرد عليك في أقرب وقت ممكن. شكرًا لك!</p>
                    <form ref={form} onSubmit={sendEmail}>
                       <div>
                         <label>الأسم</label>
                         <input type="text" required placeholder='الأسم' name="from_name"/>
                       </div>
                       <div>
                         <label>البريد الإلكتروني</label>
                         <input type="email" required placeholder='البريد الإلكنروني' name="email"/>
                       </div>
                        <div className='message_div'>
                            <label>الرسالة</label>
                            <input type="text" className='message' required name="message"/>
                        </div>
                        <br />
                         <input type='submit' value="send" className='Submit'/>
                    </form>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Contact