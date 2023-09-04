import { Container, ImageProduct, TextContainer } from "./styles";
import { data } from "./data"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

export default function Cards() {
    return (
    
        <Swiper
            slidesPerView={'auto'}
            loop={true}
            navigation={true}
            grabCursor={true}
            modules={[ Navigation]}
            className="Swiper_Products"
           
      
        >


            {data.map((item) => (

                <SwiperSlide key={item.id} className="Slide_Products">
                    <Container>

                        <ImageProduct src={item.src} />

                        <TextContainer>

                            <h2>{item.product}</h2>

                            <p>
                                {item.description}
                            </p>

                        </TextContainer>

                    </Container>
                </SwiperSlide>

            ))}


        </Swiper>
        

       

    )


}










