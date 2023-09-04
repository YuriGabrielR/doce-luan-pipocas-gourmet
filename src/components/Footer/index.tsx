import { Container, ContentFooter, DeliveryContent, Logo, LogoContent, FooterDeveloper} from './styles'
import { IconContext } from 'react-icons/'
import { BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs'


export default function Footer() {
  return (
    <Container>
      <ContentFooter>
        <LogoContent>
          <Logo src='assets/images/logos/logotext.png' />

          <p>Delicie-se e venha compra pipoca conosco! </p>

          <span>
            <IconContext.Provider value={{ size: '30px', color:'#D54B2D' }}>

              <a target='_blank' href="https://api.whatsapp.com/send?phone=551299676720"> <BsWhatsapp />  </a>
              <a  target='_blank' href="https://www.instagram.com/doce_luan/"> <BsInstagram /> </a>

              <a  target='_blank' href="https://tiktok.com/@recristiny"> <BsTiktok /> </a>
              
             
              

            </IconContext.Provider>

          </span>

        </LogoContent>


        <DeliveryContent>

          <span>
            <h3>
              Entregas: 
            </h3>

            <p> Roseira - São Paulo </p>
            <p> Guaratinguetá - São Paulo </p>
            <p> Lorena - São Paulo </p>
            <p> Em breve via Correios </p>

          </span>


          <span>
            <h3>
              Tags:
            </h3>

            <p> Pipoca para Festas  </p>
            <p> Pipoca Gourmet em Roseira </p>
            <p> Pipoca Gourmet em Lorena </p>
            <p> Pipoca Gourmet em Guaratinguetá </p>
            <p> Comprar Pipoca Gourmet </p>
            
          </span>

        </DeliveryContent>

      </ContentFooter>

      <FooterDeveloper>


        
          <p>Desenvolvido por 
            <a target='_blank' href="https://yurigabrielr.github.io/portfolio/"> 
            Yuri Ramos </a>
            
          </p>
       

      </FooterDeveloper>
    </Container>
  )
}
