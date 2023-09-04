import { styled } from "styled-components";
import { theme } from "../../../styles/theme";


type Props = {
    src:string;
}

export const Container = styled.div`
position: relative;
display:flex; 
flex-direction:column; 
align-items:center;
justify-content:center; 
/* background-color:green; */
width:100%;
height:100%;

@media (max-width: 800px) {
    width:100%;

}

@media (max-width: 740px) {
gap:18px;
justify-content:start;
height:500px;

}

`; 
export const TextTheme = styled.h3`
position:absolute; 
top:30px;
font-size:30px; 
font-family:${theme.fonts.mainFont}; 
font-weight:700;
color:white;

@media (max-width: 740px) {
    padding-top:35px;
    position:static;
   

}

`;

export const ImageSlide = styled.div<Props>`
width:265px; 
height:340px; 
background:${({src})=> `url(${src})`};
background-size:cover; 
border-radius:5px;

@media (max-width:870px) {
    width:220px; 
    height:320px;
  
    
}



@media (max-width: 740px) {
    width:200px; 
    height:280px;
}


@media (max-width: 440px) {
    width:180px; 
    height:260px;
}

`;