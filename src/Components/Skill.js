import React from 'react';
import "./skill.css";

const Skill = () => {
  return (
    <>
     <section className='section skill'>
         <div className="container">
             <div className="skill-content">
              <h2 className="section-title headline-md" id="skill-label">My Technical skills</h2>
              <ul className='skill-list'>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(177,39%,72%)"}}>
                    <div className="card-media">
                     <i class='bx bxl-html5'></i>
                    </div>
                    <h2 className="card-title">HTML</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(41, 99%, 64%)"}}>
                    <div className="card-media">
                       <i class='bx bxl-css3'></i>
                    </div>
                    <h2 className="card-title">CSS</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(19, 97%, 85%)"}}>
                    <div className="card-media">
                      <i class='bx bxl-javascript'></i>
                    </div>
                    <h2 className="card-title">JavaScript</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(221, 100%, 79%)"}}>
                    <div className="card-media">
                      <i class='bx bxl-react'></i>
                    </div>
                    <h2 className="card-title">React JS</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(76, 39%, 72%)"}}>
                    <div className="card-media">
                      <i class='bx bxl-python'></i>
                    </div>
                    <h2 className="card-title">Python</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(245, 100%, 90%)"}}>
                    <div className="card-media">
                      <i class='bx bxl-nodejs'></i>
                    </div>
                    <h2 className="card-title">Node.js</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(177, 39%, 62%)"}}>
                    <div className="card-media">
                       <i class='bx bxl-php'></i>
                    </div>
                    <h2 className="card-title">PHP</h2>
                  </div>
                </li>
                <li>
                  <div className="card card-sm" style={{backgroundColor:"hsl(19, 97%, 85%)"}}>
                    <div className="card-media">
                      <i class='bx bxl-bootstrap'></i>
                    </div>
                    <h2 className="card-title">Bootstrap</h2>
                  </div>
                </li>
              </ul>
             </div>
         </div>
    </section>
    </>
  )
}

export default Skill;
