import { Container, Feedback, FeedbacksBox, ImageProfile, ProfileBox,TitleFeedbacks } from "./styles";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Testimonials } from "./data";

export default function Feedbacks() {
  return (
    <Container>

      <TitleFeedbacks>

       <p> O que falam da Doce Luan </p> 

       <h2>Depoimentos</h2>
       

      </TitleFeedbacks>


      <FeedbacksBox>

        <Swiper className="testimonials_slides" 
        slidesPerView={1}
        modules={[Pagination]}
        grabCursor={true}
        pagination={true}
        >
        


          {Testimonials.map((item, index) =>(

            <SwiperSlide className="slide__feedback" key={index}> 
                        
            <Feedback>

              <p> {item.message} </p>

              <ProfileBox>
                <ImageProfile src={item.profile.image}/>

                <h4>{item.profile.nome}</h4>
                <p>{item.profile.type}</p>
              </ProfileBox>
            </Feedback>


            </SwiperSlide>

          ))}

          
              
        </Swiper>

      
        
      </FeedbacksBox>


    </Container>
  )
}
