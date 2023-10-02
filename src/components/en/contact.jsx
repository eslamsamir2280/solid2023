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
    <section className='row_contact' id='Contact'>
        <div className="container">
             <div className="main_title">
                <h2>Contact US</h2>
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
                         <h2>Address</h2>
                       </div>
                       <div className="text">
                        <p>9 El Obour Buildings Salah Salem st , Madinet Nasr, Cairo</p>
                       </div>
                    </div>
                    <div className="mail">
                       <div className='title'>
                         <img src="/images/Group 16997.svg" alt="#" />
                         <h2>Email</h2>
                       </div>
                       <div className="text">
                        <p>info@solidsteeldoors.com</p>
                        <p>Contact@solidsteeldoors.com</p>
                       </div>
                    </div>
                    <div className="phone">
                       <div className='title'>
                         <img src="/images/Group 16988.svg" alt="#" />
                         <h2>Mobile</h2>
                       </div>
                       <div className="text">
                        <p>Mobile 1: (+20)106-289-8833</p>
                        <p>Mobile 2: (+20)122-193-2532</p>
                       </div>
                    </div>
                    <div className='line'></div>
                    <h3 className='bold'>Drop Us A Line</h3>
                    <p>If you have any questions, please fell free to get in touch with us. We will reply to you as soon as possible. Thank you!</p>
                    <form ref={form} onSubmit={sendEmail}>
                       <div>
                         <label>Your name</label>
                         <input type="text" required placeholder='Your name' name='from_name'/>
                       </div>
                       <div>
                         <label>Your email</label>
                         <input type="email" required placeholder='Your email' name='email'/>
                       </div>
                        <div className='message_div'>
                            <label id='Message'>Your Message</label>
                            <input type="text" aria-labelledby="Message" className='message'  name='message' required/>
                        </div>
                        <br />
                        <input type="submit" value="Submit" className='Submit'/>
                    </form>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Contact