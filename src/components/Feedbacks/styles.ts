import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    margin: 0 auto;
   
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:25px;
    margin-top:100px;
    max-width:1280px; 
    padding:20px;
    height:auto;
    
    @media (max-width:740px){
        margin-top:140px;

    }

`;

export const TitleFeedbacks = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;


h2{
    font-size:24px; 
    font-family:${theme.fonts.descriptionFont};
    color:pink;
    text-transform:uppercase;

}

p{
    font-size:14px;
    font-family:${theme.fonts.descriptionFont};
    color:grey;
    text-transform:uppercase;

}



`;



export const FeedbacksBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:40px;
width:100%;
height:auto;
`;

export const Feedback = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
width:380px; 
height:280px;
background-color:white;
border-radius:10px;
padding:10px;
margin:0 auto;
box-shadow:1px 1px 3px grey;

span{
    display:flex;
    justify-content:center;
    width:100%;
    
}

p{
    font-family: ${theme.fonts.descriptionFont};
    color:#606264;
    width: 90%;
    text-align:center;


    @media (max-width:420px){

        font-size:15px;
    }

}



@media (max-width:450px){

    width:270px;

}

@media (max-width:376px){

    margin:0;

}

`;


export const ProfileBox = styled.div`
position:absolute;
display:flex; 
flex-direction:column;
align-items:center;
width:100%;
height:160px; 
bottom:-120px;

h4{
    font-size:14px; 
    font-family:${theme.fonts.descriptionFont};
    color:pink;
}

p{
    font-size:12px; 
    font-family:${theme.fonts.descriptionFont};
}
`;

export const ImageProfile = styled.img`
width: 80px; 
height:80px; 
border-radius:50%;
border:3px solid ${theme.color.secondaryColor};
object-fit:cover;
object-position:center;
`;


