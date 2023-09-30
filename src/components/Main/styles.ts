import { styled } from "styled-components";
import { theme } from "../../styles/theme";

type Props = {
    src: string;
    $display:boolean;
}

export const MainContent = styled.main`
position:relative;
display:flex; 
height:800px;
width:100vw;
margin:auto;
gap:60px;
background-image:url('assets/images/pattern/patternBg.png');


@media (max-width:800px){

    height:900px;

};


`; 

export const Container = styled.section`
display:flex; 
align-items:center;
flex-wrap:wrap-reverse;
padding:20px; 
overflow-x:hidden;
max-width:1280px; 
height:100%;
margin: 0 auto;



@media (max-width:840px){
margin-top:100px;
height:auto;
}


@media (max-width:640px){
margin-top:100px;
height:750px;
}

`;


export const TextContent = styled.div`
display:flex; 
text-align:center;
flex-direction:column; 
align-items:center;
gap:30px; 
width:60%;
height:auto;
padding: 5px 0;



h1{

    font-family: ${theme.fonts.mainFont};
    color:${theme.color.mainColor};
    font-size:clamp(20px, 2.7vw, 32px);


    @media (max-width:400px) {
        
        width:100%

    }
}

p{
    width:80%;
    font-size:clamp(14px, 2.1vw, 16px);
    font-family:${theme.fonts.descriptionFont};
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
width:200px;
height:40px; 
background-color: ${theme.color.mainColor};
border:1px solid white;
border-radius:15px;

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
width:100%;
height:40px;
border-radius:15px;


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
height:auto;


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
border-radius: 60px;
margin-bottom:50px;

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

  @media (max-width:970px){

        width: 240px; 
        height:320px;
        border-radius:45px;
        left:14px;
    }

    @media (max-width:400px){
    
    width: 200px; 
    height: 300px;
    left:20px;
}
  
}



  @media (max-width:970px){

        width: 230px; 
        height:320px;
        border-radius:45px;
    }

    @media (max-width:400px){
    
    width: 200px; 
    height: 300px;
    border-radius: 60px;

    }

`



export const BoxMainContent = styled.div`
display:flex;
gap:30px;
position:absolute;
left:50%; 
transform: translateX(-50%);
bottom:-160px;
width:auto;
height:auto;

@media (max-width:730px) {
    justify-content:center;
    flex-wrap:wrap;
    width:255px;
    bottom:-570px;
    
    
}
`;


export const Box = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
width:250px;
padding:10px;
height:180px;
background-color:white;
border-radius:10px;
border:1px solid #d54b2d85;
transition: ease-in-out 0.3s all;

h3{
    font-family:${theme.fonts.mainFont};
    color:grey;

}


p{
    text-align:center;
    font-family:${theme.fonts.descriptionFont};
    font-size:14px;
    color:grey;
}

&:hover{
    transform:scale(1.2)
}

@media (max-width:850px) {
    
    width:210px;

    p{
        font-size:12px;
    }

    &:hover{
    transform:scale(1)
}
}


@media (max-width:730px) {
    
    width:250px;

    p{
        font-size:14px;
    }

    &:hover{
    transform:scale(1)
}
}


`;