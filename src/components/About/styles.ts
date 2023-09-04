import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Containter = styled.section`
display:flex; 
flex-direction:column;
align-items:center;
justify-content:space-around; 
width:100%;
height:700px;
padding:20px;
gap:50px;


@media (max-width: 800px) {
    
    margin-top:80px;
}
`;  

export const Title = styled.h2`
display:flex;
align-items:center;
gap:10px;
position:relative;
font-family: ${theme.fonts.mainFont}; 
text-align:center; 
width:auto;
color: ${theme.color.mainColor};
font-weight:700;
`;


export const Content = styled.section`
display:flex;
justify-content:space-between;
width:100%;
height:100%;
flex-wrap:wrap;

@media (max-width:730px){
    justify-content:center;
}
`;

export const ImageStar = styled.img`
width:250px; 
height:auto; 
position:absolute;
top:-70px;


@media (max-width:730px){

width:170px;
height:170px;
top:-110px;
}

`;

export const ImagesContent = styled.div`
display:flex; 
flex-direction:column;
align-items:center;
justify-content:center;
gap:15px;
height:100%; 
width:40%; 
position:relative;

@media (max-width:730px){

    width:100%;
    height:auto;
    margin-top:30px;
}

`;

export const ImageAbout = styled.div`
background:url('assets/images/about/about-us_image.png');
background-size:cover;
background-position:center;
width:300px;
height:300px;
z-index:10;
filter: drop-shadow(3px 3px 5px #eda690 );


@media (max-width:730px){

width:230px;
height:230px;
}

`;

export const ProfileText = styled.div`
display:flex;
flex-direction:column;
gap:5px;

h2{
    font-size:25px;
    text-align:center;
    font-family:${theme.fonts.mainFont};
    color:${theme.color.secondaryColor};

    @media (max-width:470px){

     font-size: 22px;
    }
}

p{
    font-family:${theme.fonts.secondaryFont};
    text-align:center;
    color:${theme.color.secondaryColor};
    font-weight:700;

   

}`;

export const TextContent = styled.div`
width:60%;
display:flex; 
flex-direction:column;
align-items:center;
margin-top:30px;
gap:40px;
padding-top:30px;

@media (max-width:730px){

width:100%;
height:100%;
padding-top:5px;
}


h2{
    
    font-size:28px; 
    color:#606060;
    font-weight:700;
    font-family:${theme.fonts.mainFont};
    text-align:center;

    @media (max-width:470px){

        font-size: 24px;
    }
    
};


p{
font-size:18px;
font-weight:500;
font-family:${theme.fonts.secondaryFont};
color:#606060;
text-align:center;
width:80%;

    @media (max-width:432px) {
        width:100%;
    }
    
    @media (max-width:470px){

        font-size: 16px;
    }
}`;


export const IconsAbout = styled.div`
display:flex; 
flex-direction:row; 
gap: 8px;
`;