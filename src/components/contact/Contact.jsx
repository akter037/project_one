import React from 'react'
import './contact.css'
import MY from '../../assets/IMG_1987.JPG'

const Contact = () => {
  return (
    <section id='contact' className='contact_bg'>

      <div className="container contact_container">

            <div className="contact_about">
        <h2>Contact Us</h2>
        <p>Connecting  With us</p>
        <form>
        <input type="text" name="text" placeholder='Enter Name' required/>
        <textarea name="textarea"  rows="8" placeholder='Message' required></textarea>
        <div  className='checkbox_info'>
        <input type="checkbox" name="checkbox"  className='checkbox' required/>
        <p>Agree & Disagree</p>
        </div>
        <button type='submit' className='btn btn-paimary'>Send Message</button>
        
       </form>


            </div>
            
            <div className="contact_image">
              <figure>
              <img src={MY} alt="My Image" />
              <figcaption>
                <p>Your Contact Person</p>
               <h3> MD Akter Hossain</h3>
              </figcaption>
              </figure>

              
          </div>


      </div>



    </section>
  )
}

export default Contact