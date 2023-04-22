import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './project.css';
import project1 from "../Components/assets/project-1.jpeg";
import project2 from "../Components/assets/project-2.jpg";
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

                <div className="card-banner img-holder" style={{width:'400px', height:'250px'}}>
                  <img src={project1} alt="Staple Website" className="img-cover" width={'400px'} height={'250px'}/>
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Staple Website is design for Medicinal Rice Varities </h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi, mollitia cum odio, molestias, minus aut dolorum veritatis consequuntur optio blanditiis quae quo! Ab nam provident facilis incidunt, nisi temporibus.</p>
                  <a href="/" className="button button--flex">View Project</a>
                </div>
            </div>
          </li>
          <li>
            <div className="project-card">

                <div className="card-banner img-holder" style={{width:'400px', height:'250px'}}>
                  <img src={project2} alt="Staple Website" className="img-cover" width={'400px'} height={'250px'}/>
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Staple Website is design for Medicinal Rice Varities </h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi, mollitia cum odio, molestias, minus aut dolorum veritatis consequuntur optio blanditiis quae quo! Ab nam provident facilis incidunt, nisi temporibus.</p>
                  <a href="/" className="button button--flex">View Project</a>
                </div>
            </div>
          </li>
          <li>
            <div className="project-card">

                <div className="card-banner img-holder" style={{width:'400px', height:'250px'}}>
                  <img src={project3} alt="Staple Website" className="img-cover" width={'400px'} height={'250px'}/>
                    <a href="/" className="btn-icon">
                      <i class='bx bx-right-arrow-alt'></i>
                    </a>
                </div>

                <div className="card-content">
                  <span className="clip label-md">
                    web Design
                  </span>
                  <h3 className='title-md'>Staple Website is design for Medicinal Rice Varities </h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi, mollitia cum odio, molestias, minus aut dolorum veritatis consequuntur optio blanditiis quae quo! Ab nam provident facilis incidunt, nisi temporibus.</p>
                  <a href="/" className="button button--flex">View Project</a>
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

