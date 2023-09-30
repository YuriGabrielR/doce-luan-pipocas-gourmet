import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Container, ImageBusiness, ImageContainer, TextContainer, TitleBusiness } from "./styles";

export default function Business() {

    const [isResponsive, SetResponsive] = useState(true);

    useEffect(()=>{


        const verifyWidth = ()=>{
            const size = window.innerWidth; 

            if(size <= 970){

                SetResponsive(false);

            }else{
                SetResponsive(true);
            }


        }

        verifyWidth(); 

        window.addEventListener('resize', verifyWidth); 


        return ()=>{
        
            window.removeEventListener('resize', verifyWidth);

        };
        
    }, [])

    return (

        <Container>
            <TitleBusiness $display={!isResponsive}>
                    <h3 id="#Parceria"> Bora ser parceiros ? </h3>

                    <p>
                        Você quer adicionar um toque de sabor premium ao seu estabelecimento? Junte-se a nós e ofereça as Pipocas Gourmet mais deliciosas da cidade aos seus clientes!
                    </p>


                </TitleBusiness>


            <ImageContainer>
                <ImageBusiness />
            </ImageContainer>

            <TextContainer>
                <TitleBusiness $display={isResponsive}>
                    <h3 id="#Parcerias"> Bora ser parceiro ? </h3>

                    <p>
                        Você quer adicionar um toque de sabor premium ao seu estabelecimento? Junte-se a nós e ofereça as Pipocas Gourmet mais deliciosas da cidade aos seus clientes!
                    </p>


                </TitleBusiness>


                <AiFillStar size="20px" color="#D54B2D" />

                <ul>
                    <h3>Por que se tornar nosso parceiro ? </h3>


                    <li>
                        <strong> Variedade Irresistível:</strong> <br />
                        Oferecemos uma ampla gama de sabores únicos que vão cativar o paladar dos seus clientes, desde clássicos até criações gourmet exclusivas.
                    </li>


                    <li>
                        <strong> Qualidade Incomparável:</strong> <br />
                        Nossas pipocas são feitas com ingredientes de alta qualidade e todas de forma artesanal.
                    </li>


                    <li>
                        <strong> Atrativo para Clientes:</strong> <br />
                        Além das pipocas gourmet serem uma tendência crescente e bastante procuradas, priorizamos apresentar nossos produtos da melhor forma utilizando embalagens elegantes e amigáveis ao cliente.
                    </li>

                </ul>

                <span>
                    <button>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=551299676720">

                            Saber mais detalhes
                        </a>
                    </button>
                </span>

            </TextContainer>
        </Container>


    )
}
