import React from 'react'
import './question.css'
import {AiFillCaretDown} from 'react-icons/ai'

const Question = () => {
  return (
  <section id='question' className='question_bg'>
  <div className="container question_container">
    <h2>Quection And  Answer</h2>
    
    <div className="questions">
      <div className='question'>
       <h3>why are you being a programmer?</h3>
       <AiFillCaretDown size={26} className='icon'></AiFillCaretDown>
       <div className='question_ans'>
        <p>Because this section has a bright future. I am enjoying programming .</p>

       </div>

    </div>
    <div className="question">
       <h3>why are you being a programmer?</h3>
       <AiFillCaretDown size={26} className='icon'></AiFillCaretDown>
       <div className='question_ans'>
        <p>Because this section has a bright future. I am enjoying programming .</p>

       </div>
       </div>
       <div className="question">
       <h3>why are you being a programmer?</h3>
       <AiFillCaretDown size={26} className='icon'></AiFillCaretDown>
       <div className='question_ans'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum dolorem dolor exercitationem adipisci beatae doloribus doloremque vel sint repudiandae, suscipit eveniet voluptates impedit in facere reiciendis, hic non magnam.</p>

       </div>
       </div>
       <div className="question">
       <h3>why are you being a programmer?</h3>
       <AiFillCaretDown size={26} className='icon'></AiFillCaretDown>
       <div className='question_ans'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum dolorem dolor exercitationem adipisci beatae doloribus doloremque vel sint repudiandae, suscipit eveniet voluptates impedit in facere reiciendis, hic non magnam.</p>

       </div>
       </div>
       <div className="question">
       <h3>why are you being a programmer?</h3>
       <AiFillCaretDown size={26} className='icon'></AiFillCaretDown>
       <div className='question_ans'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum dolorem dolor exercitationem adipisci beatae doloribus doloremque vel sint repudiandae, suscipit eveniet voluptates impedit in facere reiciendis, hic non magnam.</p>

       </div>
       </div>


    </div>
    



  </div>




  </section>
    
  )
}

export default Question