import { AboutImageSecond, AboutSecondary, Containter, Content, ImageAbout, ImagesContent, TextContent, Title} from "./styles";


export default function About() {
  return (
    <Containter>
      <Content>

        <ImagesContent>
          
          <ImageAbout>

            <Title id="#Sobre">
              Sobre <span> Nós</span> 
            </Title>


          </ImageAbout>

        </ImagesContent>

        <TextContent $pt="170px">
          <h2> Bem-vindos à nossa <strong>pipocaria gourmet!</strong>
          </h2>

          <p>
            Sou a Rebeca, uma mãe apaixonada que transformou sua paixão por pipocas em um negócio único.
          </p>

          <p>
            Com sabores criativos e muito amor, nossa pipocaria é a celebração de momentos especiais.  <br />
            Aproveite cada mordida!
          </p>


          <p>
            Com Carinho 🥰, <br />
            A equipe da Doce Luan Pipocas Gourmet.
          </p>

        </TextContent>
      </Content>

          <AboutSecondary>
           <TextContent>

            <h2> Feitas com  <span>Amor</span>  </h2>

            <p>
            Na Doce Luan , nossas pipocas gourmet são mais do que apenas um lanche delicioso; são uma expressão de amor e paixão pela gastronomia. Cada pipoca que sai de nossa cozinha é criada com cuidado artesanal e um toque de carinho que você pode saborear em cada mordida.
            </p>



            <p>
            O que nos diferencia é nossa dedicação às encomendas personalizadas. Quer você esteja planejando uma festa, evento corporativo ou apenas deseje um agrado especial, estamos aqui para criar pipocas que se ajustem perfeitamente ao seu gosto e ocasião. Nossa equipe está sempre pronta para transformar suas ideias em realidade e garantir que sua experiência com nossas pipocas seja inesquecível.
            </p>

           </TextContent>

           <AboutImageSecond 
           src="assets/images/about/popcorn_about.jpg"
           alt="imagem-de-uma-pipoca-gourmet-tema-carnaval"
           />


          </AboutSecondary>

    </Containter>

  )
}
