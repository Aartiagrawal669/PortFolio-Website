
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../src/index.css";
import "./Contact.css"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qagao4c', 'template_pssgllc', form.current, 'A_0k0r3WwehxUei7r')
        e.target.reset()
     };
  return (
    <>
    <Navbar/>
    <section className="contact section1" id="contact">
      <h2 className="section__title"> Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
            <div className="contact__container container  container1 grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                  <div className="contact__info">
                      <div className="contact__card">
                            <i className="bx bx-mail-send contact_card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">aartiagrawal669@gmail.com</span>
                            <a href="mailto:aartiagrawal669@gmail.com.com" className="contact__button">Write me{""}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                      </div>
                      <div className="contact__card">
                          <i className="bx bxl-whatsapp contact_card-icon"></i>
                          <h3 className="contact__card-title">Whatsapp</h3>
                          <span className="contact__card-data">8458986698</span>
                      </div>
                  </div>
                </div>
                <div className="contact__content">
                  <h3 className="contact__title">Write me your Projects</h3>
                  <form className="contact__form" ref={form} onSubmit={sendEmail} >
                    <div className="contact__form-div">
                      <label className="contact__form-tag">Name</label>
                      <input 
                       type="text"
                       name="name" 
                       className="contact__form-input" 
                       placeholder='Insert your name' 
                       required/>
                    </div>
                    <div className="contact__form-div">
                      <label className="contact__form-tag">Email</label>
                      <input 
                       type="email"
                       name="email" 
                       className="contact__form-input" 
                       placeholder='Insert your email'
                       required />
                    </div>
                    <div className="contact__form-div contact__form-area">
                      <label className="contact__form-tag">Message</label>
                      <textarea name="message"
                      cols="30" rows="10"
                      className="contact__form-input"
                      placeholder='Write your message here'>
                      </textarea>
                    </div>
                    <button className='button button--flex'>Send Message<i class='bx bxs-send'></i>
                    </button>
                  </form>
                </div>
            </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact;
