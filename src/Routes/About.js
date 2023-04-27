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
          <h2 className="title-lg">A Front-End Developer Passionate About Creating Engaging User Interfaces</h2>
          <p className="body-md section-text">
          As a front-end developer, I am responsible for creating the visual components of a web application that users can see and interact with. I specialize in client-side web development, meaning that I focus on the parts of the website that users interact with directly.
          My primary tools are programming languages such as HTML, CSS, and JavaScript, which I use to create responsive and aesthetically pleasing user interfaces. I am also proficient in using front-end frameworks and libraries such as React and Bootstrap.
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
