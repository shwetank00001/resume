import React from 'react'
import './About.scss'

import Cube from './Cube'


const About = () => {
  return (
    <div className='about' data-aos="fade-right">
      <h3>About Me</h3>
      <p>Hi, I am Shwetank and this is my digital card currently and I will be updating this soon enough. </p>
      <p>I am working on reactjs and improving my skills as a front end dev for better job  opportunities.</p>

      <div className='cube'>
        <Cube/>
      </div>

    </div>
  )
}

export default About