import React from 'react'
import './testimonial.css'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";



const data=[
  {
    designation:'Dev Developer',
    name:'Akter Hossain',
    review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
  },
  {
    designation:'Dev Developer',
    name:'Al-amin Hossain',
    review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
  },
  {
    designation:'Dev Developer',
    name:'Iqbal Hossain',
    review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
  }



]


const Testimonial = () => {
  return (
   <section  id='testimonial' className='client_say'>
    
    <div className="container testimonial_container">
          <h2>
             What our clients say
 
          </h2>

          <Swiper className='testimonial_options'
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
         
          
          >
  {
          data.map(({designation,name,review},index)=>{
            return(

              
              <SwiperSlide Key={index}  className='options'>
                 <p>{review}</p>
                 <div className='client_name'>
                    <h3>{name}</h3>
                    <p>{designation}</p>
                 </div>
              </SwiperSlide>
     
     
           
              )

          }
          )
        }
          
          

          </Swiper>
             
           


    </div>


   </section>
  )
}

export default Testimonial