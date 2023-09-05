import { styled } from "styled-components";
import { theme } from "../../styles/theme";

type Props = {
    src: string;
    $display:boolean;
}

export const MainContent = styled.main`
display:flex; 
height:auto;
max-width:1280px; 
flex-direction:column;
margin:auto;
gap:60px;

`; 

export const Container = styled.section`
display:flex; 
align-items:center;
flex-wrap:wrap-reverse;
padding:20px; 
overflow-x:hidden;
width:100%;
height:650px;


@media (max-width:800px){
margin-top:30px;
height:auto;
}
`;


export const TextContent = styled.div`
display:flex; 
text-align:center;
flex-direction:column; 

align-items:center;
gap:30px; 
width:60%;

h1{

    font-family: ${theme.fonts.mainFont};
    color:${theme.color.mainColor};
    font-size:clamp(20px, 2.7vw, 32px);


    @media (max-width:400px) {
        
        width:95%

    }
}

p{
    width:80%;
    font-size:clamp(14px, 2.1vw, 16px);
    font-family:${theme.fonts.secondaryFont};
    font-weight:700;
    color:${theme.color.secondaryColor};

    @media (max-width:400px) {
    width:100%;
    }

}

@media (max-width:800px) {
    width:100%;
    gap:15px;
}
`;



export const Button = styled.button`
display:flex; 
justify-content:center;
align-items:center;
cursor: pointer;
width:210px;
height:40px; 
background-color: ${theme.color.mainColor};
border-radius:20px;
padding:5px;

@media (max-width:527px){
    width:180px; 
    height:35px;

}

@media (max-width:400px){
    margin-top:20px;
    width:180px; 
    height:40px;
    border-radius:15px;

}

a{

display:flex;
color:white;
align-items:center;
justify-content:center;
gap:7px;
font-family:${theme.fonts.secondaryFont}; 
font-size:16px;
font-weight:bold;
text-transform:uppercase;


@media (max-width:527px){
   
    font-size:14px;
}


}
`;

export const SlideContainer = styled.div<Partial<Props>>`

display:${({$display})=>($display ? 'flex':'none')}; 
align-items:center;
text-align:center;
justify-content:center;
position:relative;
width:40%; 
height:100%;


@media (max-width:800px){

    width:100%;
}




`;

export const ImageSlide = styled.div<Partial<Props>>`
cursor: grab;
position:relative;
display:flex;
justify-content:center;
align-items:center;
background:${({src})=> `url(${src})`};
object-fit: cover;
background-size: cover;
width: 250px; 
height: 350px;
border-radius: 76px;

&::after{
    content:'';
    background-image:url('assets/images/pattern/pattern_slide.png');
    position:absolute;
    object-fit:cover;
    top:3px;
    left:30px;
    width: 250px; 
    height: 350px;
    border-radius: 76px;
    z-index:-1;
    transform:rotate(5deg);
    opacity:80%;

    @media (max-width:400px){
    
    width: 200px; 
    height: 300px;
    left:20px;
}
}


@media (max-width:400px){
    
    width: 200px; 
    height: 300px;
    border-radius: 60px;
}
`