import React from 'react'
import './header.css'
import Nav from '../nav/Nav'
import MY from '../../assets/my.png'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
     <Nav></Nav>
     <div className='header_wrap_pc'>
  
    <div className="header_wrap">
  <div className='header_contant'>
       <h2>
        Damit alle in eine<br/>
        Richtung ziehen
         </h2>
        
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate quos recusandae molestiae quidem reprehenderit ad ab, velit architecto quae.
         </p>
         <a href="#contact" className='btn btn-paimary'>
          Contact Us
         </a>
       </div>
   
   <div className='header_image'>
    <img src={MY} alt="My" />
  </div>


  </div>
   
  </div>

  <div className='header_wrap_mobile'>
  <div className="header_wrap">
  <div className='header_image'>
  <img src={MY} alt="My" />
</div>

<div className='header_contant'>
     <h2>
      Damit alle in eine<br/>
      Richtung ziehen
       </h2>
      
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate quos recusandae molestiae quidem reprehenderit ad ab, velit architecto quae.
       </p>
       <div className='cta'>

       <a href="#contact" className='btn btn-paimary'>
        Contact Us
       </a>
       </div>
       
     </div>
 

</div>


  
     

</div>



  </div>
       

   




    </header>
  )
}

export default Header