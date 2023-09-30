import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerProducts = styled.section`
display:flex; 
flex-direction:column;
align-items:center;
gap:10px;
width:100%;
height:auto; 
padding:20px;
margin-top:150px;

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
   height:450px;

`;

export const TitleProducts = styled.div`
position:absolute; 
top:-15px;
left:60px;
display:flex;
align-items:center;
justify-content:center;
gap:50px;
height:30px; 

@media (max-width:900px){

    flex-direction:column; 
    width:100%; 
    gap:10px;
    top: -35px;
    left:50%; 
    transform:translateX(-50%);
}


h2{
font-size:30px;
font-family: ${theme.fonts.descriptionFont}; 
text-transform:uppercase;
font-weight:700;
color:#808080;

}

span{
    color:${theme.color.secondaryColor};
}

p{
    font-family:${theme.fonts.descriptionFont};
    color:grey;
    text-align:center;
}
`;


export const Button = styled.button`
cursor: pointer;
width:160px;
height:35px;
background-color:${theme.color.secondaryColor};
border-radius:15px;
border:1px solid white;


a{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    font-family:${theme.fonts.descriptionFont}; 
    font-size:14px;
    text-transform:uppercase;
    color:white;
    font-weight:800;

    
}


`;