import { BiShoppingBag } from "react-icons/bi";
import Cards from "./Cards";
import { ContainerProducts, ContainerSlider, TitleProducts, Button} from "./styles";

export default function Products() {
  return (


    <ContainerProducts>


      <ContainerSlider>
        <TitleProducts id="#Sabores">
          <h2>
          Nossas <span> Pipocas </span>
          </h2>

          <p>
            Veja todos os sabores que produzimos de forma artesanal.
          </p>
          
        </TitleProducts>

        <Cards />
      </ContainerSlider>

      <Button>
        <a target="_blank"
          href="https://api.whatsapp.com/send?phone=551299676720"
        >

        Comprar <span> <BiShoppingBag size='23px'/> </span> 

        </a>
      </Button>
    </ContainerProducts>
  )
}
