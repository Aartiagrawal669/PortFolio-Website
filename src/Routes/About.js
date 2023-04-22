import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import profile from "../Components/assets/profile.jpeg"
import "./about.css";

const About=()=> {
  return (
    <>
    <Navbar/>
    <section className="section about">
      <div className="container">
        <figure className='about-banner'>
          <img src={profile} alt="Aarti's Profile" width={'400px'} height={'250px'}/>
        </figure>

        <div className="about-content">
          <h2 className="title-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo harum dolor assumenda perferendis</h2>
          <p className="body-md section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam ducimus officia quis eum enim, quidem ab? Et pariatur, eius inventore, consequuntur nam magni nobis tempora eum repellat ad distinctio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt mollitia rerum ut corporis perspiciatis dicta debitis quod nobis. Recusandae itaque vero quasi quo, debitis rem ipsa vitae doloribus explicabo eos.
          </p>
          <div className="wrapper">
              <a href="/project" className="button button--flex">View Project</a>
              <a href="/contact" className="button button--flex">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About;
