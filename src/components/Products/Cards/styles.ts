import { styled } from "styled-components";
import { theme } from "../../../styles/theme";

type Props = {

    src:string;
}

export const Container = styled.div`
position:relative;
width:250px; 
height:300px;
background-color:#eae1d5;
display:flex; 
flex-direction:column;
justify-content:center; 
align-items:center;
padding:8px;
gap:10px; 
border-radius:10px;


&::after{
    content:'';
    position: absolute; 
    top:0; 
    height:50px; 
    width:100%; 
    background:url('assets/images/pattern/pattern_products.png');
    
    z-index:1;

}

@media (max-width:545px) {
    
    width:200px;
}

`;

export const ImageProduct = styled.div<Props>`
width: 90%;
height:200px; 
background:${({src})=> `url(${src})`};
background-size:cover; 
background-position:center;
z-index:5;
`; 

export const TextContainer = styled.div`
display:flex;
flex-direction:column;
gap:6px;
width:90%; 
height:auto; 
text-align:center;
z-index:5;

h2{
    font-family:${theme.fonts.mainFont}; 
    color: ${theme.color.mainColor}; 
    font-size:14px; 

}


p{
    font-family:${theme.fonts.secondaryFont}; 
    color: ${theme.color.mainColor}; 
    font-size:10px;
}
`;

