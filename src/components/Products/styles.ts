import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerProducts = styled.section`
display:flex; 
flex-direction:column;

align-items:center;
gap:40px;
width:100%;
height:600px; 
padding:20px;

@media (max-width:730px) {
    margin-top:200px;
}


@media (max-width:329px) {
    margin-top:250px;
}

`;

export const ContainerSlider = styled.div`
   position:relative;
   display:flex;
   gap:30px;
   width:100%; 
   height:350px;

`;

export const TitleProducts = styled.h2`
display:flex;
align-items:center;
justify-content:center;
gap:20px;
height:30px; 
font-family: ${theme.fonts.mainFont}; 
color:${theme.color.mainColor}; 


`



export const ButtonProduct = styled.button`
cursor: pointer;
position:absolute;
top:8px;
left:4px;
font-family:${theme.fonts.secondaryFont}; 
font-size:14px;
font-weight:700;
color: white; 
border-radius:10px;
width:140px; 
height:32px; 
display:flex; 
align-items:center;
justify-content:center;  
gap:6px; 
background-color:${theme.color.mainColor};
z-index:10;
`;


export const Button = styled.button`
cursor: pointer;
width:160px;
height:35px;
background-color:#d54b2dd9;
border-radius:15px;
border:1px solid white;


a{
    font-family:${theme.fonts.secondaryFont}; 
    font-size:14px;
    text-transform:uppercase;
    color:white;
    font-weight:800;
}
`;