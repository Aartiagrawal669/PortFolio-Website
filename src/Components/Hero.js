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
                        I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
                        Lorem ipsum dolor sit Accusamus, atque nulla in autem nostrum.
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

