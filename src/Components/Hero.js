import React from 'react';
import "./Hero.css";
import resume from "../Components/assets/resume.pdf"
const Hero = () => {
  return (
    <>
    <section className="home section1" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
                  <div className="home_img"></div>
                    <div className="home_data">
                        <h1 className="home_title">Hii I'm Aarti Agrawal</h1>
                        <h3 className="home_subtitle"> Fontend Developer</h3>
                        <p className="home_description">
                         I'm a front-end software engineer based in Raipur, and I love what I do. I am passionate about creating elegant, efficient, and user-friendly interfaces that provide a seamless experience for users.I am committed to staying up-to-date with the latest tools and technologies in order to provide the best possible solutions.
                        </p>
                      <a href={resume} download="" className="button button--flex">Resume</a>
                    </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default Hero;

