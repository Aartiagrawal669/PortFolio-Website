import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './project.css';
import project1 from "../Components/assets/project-1.jpeg";
import project2 from "../Components/assets/project-2.jpeg";
import project3 from "../Components/assets/project-3.jpeg";


const Project = () => {
  return (
    <>
    <Navbar/>
    <section className="section1 project">
      <div className="container1">
        <h2 className="section-title1">Latest Projects</h2>
        <ul className="project-list">
          <li>
            <div className="project-card">

                <div className="card-banner img-holder">
                  <img src={project1} alt="Staple Website" className="img-cover" />
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Staple Website is design for Medicinal Rice Varities </h3>
                  <p className="card-text">With its focus on promoting the medicinal varieties of rice and connecting farmers with expert opinions, Staple represents an innovative and impactful approach to promoting sustainable and healthy rice farming practices.
                  </p>
                  <a href="https://github.com/Aartiagrawal669/Staple-ProjectRice" className="button button--flex" target="_blank" rel="noreferrer">View Project</a>
                </div>
            </div>
          </li>
          <li>
            <div className="project-card">

                <div className="card-banner img-holder" >
                  <img src={project2} alt="Staple Website" className="img-cover" />
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Portfolio Built with React-JS</h3>
                  <p className="card-text">My portfolio website, created using React JS, is a showcase of my skills and work samples.The homepage features an introduction about myself my skills and my projects. The navigation menu allows easy access to the different sections of the website, including my work sample and contact information.</p>
                  <a href="https://github.com/Aartiagrawal669/PortFolio-Website" target="_blank" rel="noreferrer" className="button button--flex">View Project</a>
                </div>
            </div>
          </li>
          <li>
            <div className="project-card">

                <div className="card-banner img-holder">
                  <img src={project3} alt="Staple Website" className="img-cover"/>
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Textutils: A User-Friendly, Responsive Website for Easy Text Manipulation</h3>
                  <p className="card-text">Textutils is a responsive website designed to help users manipulate text easily. With its user-friendly interface, users can copy and paste text into the tool and perform a variety of manipulations, such as removing extra spaces, converting to uppercase or lowercase,copy text and clear text.</p>
                  <a href="https://github.com/Aartiagrawal669/TextUtils-React" target="_blank" rel="noreferrer" className="button button--flex">View Project</a>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Project;

