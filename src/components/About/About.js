import React from 'react'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faGithub,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='about' data-aos="fade-right">
      <h3>About Me</h3>
      <p>Hi, I am Shwetank and this is my digital card currently and I will be updating this soon enough. </p>
      <p>I am working on reactjs and improving my skills as a front end dev for better job  opportunities.</p>

      <div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About