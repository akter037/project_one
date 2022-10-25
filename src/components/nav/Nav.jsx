import React from 'react'
import './nav.css'
import {useState} from 'react'
import {ImMenu} from 'react-icons/im'
import {ImCross} from "react-icons/im";

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
 const [isMobile,setIsMobile]=useState(false)
   

  return (
      
    <nav className='navVar'>
      <div className='logo'>
      <h1>PO</h1>
        <h4>Project <br/> Operation</h4>
      </div>
   

     <div className={isMobile? "pc_display" : "mb_display"} onClick={()=> setIsMobile(false)}>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#'? 'active':' '}>Home</a>
      <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav=== '#service'? 'active':' '}>Service</a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav=== '#experience'? 'active':' '}>Resource</a>
      </div>
      
      
      <button  className='mobile-menu-icon' 
      onClick={() => setIsMobile(!isMobile)}>
    {isMobile ?(<ImCross/>
    
    ):(
    <ImMenu/>
    )}
     </button>
      
     
    </nav>
  )
}

export default Nav