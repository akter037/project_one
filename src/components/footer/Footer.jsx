import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id='footer' className='footer_bg'>
      <div className="container footer_container">
     <article>
     <div className='logo'>
      <h1>PO</h1>
        <h4>Project <br/> Operation</h4>
      </div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='comment_sign'>
        
           <p >Akter Hossain</p>
      
      </div>

     </article>
    

     <article>
     <div className='contact_details'>
      <h3>Contact</h3>
      <ul>
        <li>Address: 1207 Mohammadpur , Dhaka</li>
        <li>Phone: +8801856129490</li>
        <li>G-mail: mdaktercse01@gmail.com</li>
      </ul>

     </div>

     </article>
     <article>
      <div className='footer_link'>
        <h3> Useful Link</h3>
        <ul>
          <li><a href="https://github.com/akter037" target="_blank">Github</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="http://akter037.github.io/myportfolio/" target="_blank">Portfolio</a></li>
        </ul>

      </div>

     </article>


      </div>



    </section>
  )
}

export default Footer