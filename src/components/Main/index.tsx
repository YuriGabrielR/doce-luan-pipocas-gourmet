
import { useEffect, useState } from "react";
import SliderMain from "./SlidesMain/SliderMain";
import { MainContent, Container, TextContent, Button, SlideContainer, BoxMainContent, Box } from "./styles";
import { Link } from "react-scroll";
import { BoxMainData } from "./data";



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
        
        <>
       

        <MainContent>

            <Container>
                <TextContent>

                    <h1>
                        Delicie-se com nossas pipocas gourmet, estouradas com paixão!  <br /> Vamos transformar seu melhor momento em uma explosão de sabores!
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

                        <Link to="#Sabores" spy={true} smooth={true} offset={-60} duration={500} target="_blank" 
                         href="https://api.whatsapp.com/send?phone=551299676720">
                                                        
                            VER MAIS
                        </Link>
                    </Button>

                </TextContent>


              <SlideContainer $display={isVisible}>
              
              <SliderMain/>

              </SlideContainer>

                       

            </Container>


            <BoxMainContent>

                {BoxMainData.map((data, index)=>(

                <Box key={index}>

                    <span>{data.icon}</span>

                    <h3>{data.title}</h3>

                    <p> {data.description}</p>
                                    
                </Box>

                ))}
               
            </BoxMainContent>
        </MainContent>

        </>
        

    )
}
