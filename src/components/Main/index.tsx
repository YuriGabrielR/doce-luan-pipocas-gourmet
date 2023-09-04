
import { useEffect, useState } from "react";
import SliderMain from "./SlidesMain/SliderMain";
import { MainContent, Container, TextContent, Button, SlideContainer } from "./styles";
import About from "../About";
import Products from "../Products";
import { PiPopcornBold } from "react-icons/pi";



export default function Main() {
    
    
    const [isVisible, setIsVisible] = useState<boolean>(true); 

    

    useEffect(()=>{


        const verifyWidth = ()=>{
            const size = window.innerWidth; 

            if(size <= 800){

                setIsVisible(false);

            }else{
                setIsVisible(true);
            }


        }

        verifyWidth(); 

        window.addEventListener('resize', verifyWidth); 


        return ()=>{
        
            window.removeEventListener('resize', verifyWidth);

        };
        
    }, [])

    return (

        <MainContent>

            <Container>
                <TextContent>

                    <h1>
                        Delicie-se com nossas pipocas gourmet, estouradas com paixão! 🥰 <br /> Vamos transformar seu melhor momento em uma explosão de sabores!
                    </h1>
                       
                       {!isVisible && 
                          <SlideContainer $display={!isVisible}>
              
                          <SliderMain/>
            
                          </SlideContainer>
            
                       
                       }
                        
                    <p>
                        Trabalhamos sob encomendas personalizadas,
                        são embalagens de aniversário, festas, temáticas e muito mais!!
                    </p>


                    <Button>

                        <a target="_blank" 
                         href="https://api.whatsapp.com/send?phone=551299676720">
                            
                            Quero Comprar <PiPopcornBold size='20px'/>
                        </a>
                    </Button>

                </TextContent>


              <SlideContainer $display={isVisible}>
              
              <SliderMain/>

              </SlideContainer>

                       

            </Container>


            <About/>

            <Products/>

                    
        </MainContent>


    )
}
