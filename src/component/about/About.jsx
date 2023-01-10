import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import {BsAward} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'





function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>

            <article className='about_card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Degree</h5>
              <small>Computer Engineering</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ mini and major projects</small>
            </article>
          </div>

          <p>
            I am a computer engineering student studying in Kathmandu Engineering College. I have no proper working experience but have done couple of projects on my own.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;
