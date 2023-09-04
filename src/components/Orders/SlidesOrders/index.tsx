
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Pagination } from 'swiper/modules';
import { junina, pascoa, Order1, Order3 } from './data';
import { ImageSlide, TextTheme , Container} from './styles';

export const FestaJunina = ()=>{

  return(

    <Container>
      <TextTheme>
       Festa Junina

      </TextTheme>

       <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      pagination={true}
      className="slide_order"
    >

    

      {junina.map((img, index)=>(

        <SwiperSlide className='image__slideOrder' key={index}>
          
          <ImageSlide src={img.src} aria-labelledby={img.alt}/>
          
          
          </SwiperSlide>


      ))}
    </Swiper>
      
      </Container>


  )

};

export const Pascoa = ()=>{

  return(

    <Container>
      <TextTheme>
       Páscoa

      </TextTheme>

       <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      pagination={true}
      className="slide_order"
    >

    

      {pascoa.map((img, index)=>(

        <SwiperSlide className='image__slideOrder' key={index}>
          
          <ImageSlide src={img.src} aria-labelledby={img.alt}/>
          
          
          </SwiperSlide>


      ))}
    </Swiper>
      
      </Container>


  )

};


export const Aniversario = ()=>{

    return(

      <Container>
        <TextTheme>
          Festas de Aniversário

        </TextTheme>

         <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={true}
        className="slide_order"
      >

      

        {Order1.map((img, index)=>(

          <SwiperSlide className='image__slideOrder' key={index}>
            
            <ImageSlide src={img.src} aria-labelledby={img.alt}/>
            
            
            </SwiperSlide>


        ))}
      </Swiper>
        
        </Container>


    )

};

export const DiaDasMaes = ()=>{

  return(

    <Container>
      <TextTheme>
       Dia das Mães

      </TextTheme>

       <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      pagination={true}
      className="slide_order"
    >

    

      {Order3.map((img, index)=>(

        <SwiperSlide className='image__slideOrder' key={index}>
          
          <ImageSlide src={img.src} aria-labelledby={img.alt}/>
          
          
          </SwiperSlide>


      ))}
    </Swiper>
      
      </Container>


  )

};



