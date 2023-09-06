import { theme } from "../../styles/theme";
import Cards from "./Cards";
import { ContainerProducts, ContainerSlider, TitleProducts, Button } from "./styles";
import {AiFillStar} from 'react-icons/ai'

export default function Products() {
  return (


    <ContainerProducts>
      
      <TitleProducts id="#Sabores"> 
       <AiFillStar size='22px' color={theme.color.mainColor}/>
        Nossas Pipocas 
       <AiFillStar size='22px' color={theme.color.mainColor}/> 

      </TitleProducts>

      <ContainerSlider>
    
      <Cards/>
      </ContainerSlider>

      <Button>
        <a target="_blank"
         href="https://api.whatsapp.com/send?phone=551299676720"
        >
          
          Quero provar 😋

          
          
        </a>
      </Button>
    </ContainerProducts>
  )
}
