import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__language">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Elementary</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Elementary</small> 
              </div>             
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>
          </div>


        {/* Other skills  */}
        </div>
        <div className="experience__language">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
              <h4>Machine Learning</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div> 
              <h4>MySQL Database</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>  
              </div>            
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
