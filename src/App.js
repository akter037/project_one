import React from 'react'
import Header from './components/header/Header'
import Object from './components/object/Object'
import Imformation from './components/imformation/Imformation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonial'
import Service from './components/service/Service'
import Question from './components/question/Question'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
   <Header></Header>
   <Object></Object>
   <Imformation></Imformation>
   <About></About>
   <Experience></Experience>
   <Testimonials></Testimonials>
   <Service></Service>   
   <Question></Question>
   <Contact></Contact>
   <Footer></Footer>
   </>
  )
}

export default App
