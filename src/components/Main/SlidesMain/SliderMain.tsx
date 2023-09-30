
import {Swiper, SwiperSlide} from 'swiper/react';
import { imagesSlideMain } from './data';
import { Pagination, Autoplay} from 'swiper/modules';
import { ImageSlide } from '../styles';

export default function SliderMain() {
  return (


     <Swiper 
     loop={true}
     pagination={{clickable:true}}
     slidesPerView={1}
     className='SwiperContainer'
     autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[ Pagination, Autoplay]}
     >


      {imagesSlideMain.map((image)=>(


        <SwiperSlide key={image.id} className='containerSlideImage'>

        <ImageSlide aria-labelledby={image.alt} src={image.src}/>

        </SwiperSlide>

      ))}

      

     </Swiper>

     
  )
}
