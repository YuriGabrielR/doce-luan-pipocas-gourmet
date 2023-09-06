import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    margin: 0 auto;
   
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:50px;
    margin-top:100px;
    max-width:1280px; 
    padding:20px;
    height:auto;

    @media (max-width:740px){
        margin-top:200px;

    }

`;

export const TitleFeedbacks = styled.h2`
display:flex;
align-items:center;
gap:13px;
font-size:24px; 
font-family:${theme.fonts.mainFont};
color:${theme.color.mainColor}; 

`;



export const FeedbacksBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:40px;
width:100%;
height:300px;

`;

export const IconStars = styled.div`
width: 93px;
height:20px;
background:url('assets/images/feedbacks/avaliacao_icon.png');
background-size:cover;
background-position:center;
`;
export const Feedback = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
width:300px; 
height:170px;
background-color:white;
border-radius:10px;
padding:10px;
margin:0 auto;


span{
    display:flex;
    justify-content:center;
    width:100%;
    
}

h4{
    font-family: ${theme.fonts.mainFont};
    color:#606264;
    width: 90%;
    text-align:center;


    @media (max-width:420px){

        font-size:15px;
    }

}

&::after{
    position:absolute;
    right:-20px;
    top:-30px;
    content:'';
    background:url('src/assets/images/feedbacks/iconAfter.png');
    background-size:cover;
    height:40px;
    width:40px;

    @media (max-width:350px){

    right:10px;
    }

}


@media (max-width:420px){

    width:270px;

}

@media (max-width:376px){

    margin:0;

}


`;

export const SeeMoreButton = styled.button`
cursor: pointer;
display:flex;
align-items:center;
justify-content:center;
border-radius:15px;
border: 1px solid white;
background-color:${theme.color.mainColor};
width:220px; 
height:45px;

a{
display:flex;
align-items:center;
color:white;
font-weight:700;
font-family:${theme.fonts.secondaryFont};
text-transform:uppercase;
gap:6px;

};


`;