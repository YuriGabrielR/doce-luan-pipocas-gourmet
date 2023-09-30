import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { StyleProps } from "../../styles/typeGlobalStyles";

export const Containter = styled.section`
display:flex; 
flex-direction:column;
justify-content:center;
align-items:center;
margin: 0 auto;
width:100%;
height:auto;
padding:20px;
gap:10px;
margin-top:250px;


@media (max-width: 730px) {
    
    margin-top:600px;
}

@media (max-width:530px) {
    
margin-top:670px;
gap:40px;
}


`;  

export const Title = styled.h2`
display:flex;
align-items:center;
gap:8px;
position:absolute;
right:-140px;
top:80px;
font-family: ${theme.fonts.descriptionFont}; 
text-align:center; 
color: grey;
font-weight:700;
font-size:35px;

span{
    color:${theme.color.secondaryColor};
}

@media (max-width:530px){

font-size: 28px;
right:-105px;


};

@media (max-width:530px){
right:auto;
left:50%;
transform: translateX(-50%);
top:-60px;


};

`;



export const Content = styled.section`
display:flex;
width:100%;
height:100%;
flex-wrap:wrap;
padding:20px;

@media (max-width:780px){
    justify-content:center;
}
`;


export const ImagesContent = styled.div`
display:flex; 
flex-direction:column;
align-items:end;
gap:15px;
height:100%; 
width:50%; 
position:relative;

@media (max-width:780px){
    align-items:center;
    width:100%;
    height:auto;
    margin-top:30px;
}

`;

export const ImageAbout = styled.div`
position:relative;
background:url('assets/images/about/about-us_image.png');
background-size:cover;
background-position:center;
width:380px;
height:400px;

z-index:10;


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

export const TextContent = styled.div<Partial<StyleProps>>`
width:50%;
display:flex; 
flex-direction:column;
align-items:center;
justify-content:center;
gap:35px;
padding-top:${({$pt})=> ($pt ? $pt : '0px')};

span{
    color: pink;
}


@media (max-width:780px){

width:100%;
height:100%;
padding-top:5px;
}


h2{
    
    font-size:24px; 
    color:#9e9d9d;
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


export const AboutSecondary = styled.div`
display:flex; 
align-items:center;
justify-content:center;
gap:30px;
flex-wrap:wrap-reverse;
width:100%; 
height:auto;
`;  

export const AboutImageSecond = styled.img`
object-fit:contain;
object-position:center;
width:340px;
height:400px;
z-index:10;


@media (max-width:730px){

width:230px;
height:230px;
}
`;