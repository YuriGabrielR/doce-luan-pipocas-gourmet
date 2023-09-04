import { Container, ContainerSlides, TextContent, Button, Wrapper } from "./styles";
import { PiPopcornBold } from 'react-icons/pi';
import { TbStarFilled } from 'react-icons/tb';
import { FestaJunina, Pascoa, Aniversario, DiaDasMaes,  } from "./SlidesOrders";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



export default function Orders() {
  return (
    <Container>
      <Wrapper>
        <ContainerSlides>

          <Swiper
            navigation={true}
            slidesPerView={1}
            grabCursor={false}
            modules={[Navigation]}
            className="SwiperContainerOrder"
           
          >


            <SwiperSlide> <FestaJunina /> </SwiperSlide>
            <SwiperSlide> <Pascoa /> </SwiperSlide>
            <SwiperSlide> <Aniversario /> </SwiperSlide>
            <SwiperSlide> <DiaDasMaes />  </SwiperSlide>
            
           

          </Swiper>




        </ContainerSlides>
        <TextContent>

          <PiPopcornBold size='50px' color='white' />

          <TbStarFilled size='20px' color='white' />
          <h2 id="#Encomendas">Encomendas</h2>
          <p>
            Realizamos encomendas personalizadas que transformam seus desejos em realidade, proporcionamos uma entrega 100% personalizada para sua ocasião especial.
          </p>

          <span>
            <h3>Fazemos entregas em: </h3>
            <p><strong> Roseira - SP</strong> </p>
            <p> <strong>Lorena - SP</strong> </p>
            <p><strong>Guaratinguetá - SP</strong> </p>

            <p>🚛 Em breve pelos Correios </p>
          </span>

          <TbStarFilled size='20px' color='white' />

          <Button> 
            
            <a target="_blank" href="https://api.whatsapp.com/send?phone=551299676720">
              
            Fazer Orçamento 

            </a> 
            
          </Button>

        </TextContent>

      </Wrapper>
    </Container>
  )
}
