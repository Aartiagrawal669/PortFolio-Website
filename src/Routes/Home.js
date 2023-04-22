import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skill from '../Components/Skill';
import Project from '../Routes/Project';

// import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Project/>
    </div>
  )
}

export default Home;
