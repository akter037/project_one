import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'

const About = () => {
  return (
  <section id='about' className='about_bg'>
      
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me_image_mobile">

          <img src={ME} alt="me" />

          </div>
             
           <h2> Concentrate on the essentials</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error quisquam dolor sunt voluptatum repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, totam</p>
          <a  href="#contact"  className='btn btn-paimary'>Contact Us</a>
        </div>
        <div className="about_me_image">

            <img src={ME} alt="me" />
          
        </div>






      </div>


  </section>
  )
}

export default About