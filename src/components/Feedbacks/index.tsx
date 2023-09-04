import { BsBalloonHeartFill, BsInstagram } from "react-icons/bs";
import { Container, Feedback, FeedbacksBox, IconStars, SeeMoreButton, TitleFeedbacks } from "./styles";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Testimonials } from "./data";

export default function Feedbacks() {
  return (
    <Container>

      <TitleFeedbacks>

       <BsBalloonHeartFill id='Feedbacks' size='24px'/> 
       Feedbacks 
       

      </TitleFeedbacks>


      <FeedbacksBox>

        <Swiper className="testimonials_slides" 
        slidesPerView={1}

        breakpoints={{

          729:{slidesPerView:2},

          1064:{slidesPerView:3}

        }}


       grabCursor={true}
       
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        >
        


          {Testimonials.map((item, index) =>(

            <SwiperSlide className="slide__feedback" key={index}> 
                        
            <Feedback>
              <span> <IconStars/> </span>

              <h4> {item.description} </h4>

            </Feedback>


            </SwiperSlide>

          ))}

          
              
        </Swiper>

      
        
      </FeedbacksBox>

        <SeeMoreButton> 
          <a target="_blank" href="https://www.instagram.com/doce_luan/">
          Ver mais no Instagram <BsInstagram size='20px'/>
          </a>  </SeeMoreButton>

    </Container>
  )
}
