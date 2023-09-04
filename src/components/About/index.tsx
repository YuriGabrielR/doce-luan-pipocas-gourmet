import { Icons } from "./data";
import { Containter, Content, IconsAbout, ImageAbout, ImageStar, ImagesContent, ProfileText, TextContent, Title } from "./styles";

import {WiStars} from 'react-icons/wi'


export default function About() {
  return (
    <Containter>

      <Title id="#Sobre">
      <WiStars size='40px'/> 

        Sobre Nós 
         
      <WiStars size='40px'/> </Title>

      <Content>

        <ImagesContent>
          <ImageStar src="assets/images/about/estrela.png" />
          <ImageAbout />

          <ProfileText>

            <h2> Chef Rebeca </h2>
            <p> Chef e criadora da marca Doce Luan </p>

          </ProfileText>

          <IconsAbout>

            {Icons.map((icon, index) => (


              <a key={index} target="_blank" href={icon.src}>{icon.icon}</a>

            ))}


          </IconsAbout>

        </ImagesContent>

        <TextContent>
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

    </Containter>

  )
}
