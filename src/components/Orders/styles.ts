import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
width:100vw; 
background:url('assets/images/pattern/patternBg.png');
background-size:cover;
margin-top:140px;

`;
export const Wrapper = styled.div`
position:relative;
display:flex; 
justify-content:center;
width:100%; 
height:100%; 


@media (max-width: 740px) {
    align-items:center;
    flex-direction:column;
    justify-content:start;
    gap:30px;
    height:970px;
}



`;
 
export const ContainerSlides = styled.div`
display:flex;
width:50%;
justify-content:center;
margin-right:20px;


@media (max-width:740px) {
width:90%;     
}

`;




export const TextContent = styled.div`
display:flex;
gap:30px;
flex-direction:column;
align-items:center; 
justify-content:center;
width:500px;
height:100%;
background-color:#D66E64  ;
padding:5px;
padding-top:20px;
border:1px solid ${theme.color.mainColor};

h2{
font-size:40px;
font-family: ${theme.fonts.mainFont};
color:white;

    
@media (max-width: 740px) {
font-size:30px;

}
}

h3{
font-family: ${theme.fonts.descriptionFont};
color:white;

}

p{
    font-family: ${theme.fonts.secondaryFont};
    color:white;
   
    text-align:center;
    width:90%;
    
@media (max-width: 740px) {

    font-size:15px;

}
}

span{
    display:flex; 
    flex-direction:column;
    align-items:center;
    gap:10px;
    width:100%;

    p{
        text-align:center;
        width:100%;
        font-family:${theme.fonts.descriptionFont};

        
@media (max-width: 740px) {
    font-size:14px;

}
    }
}

@media (max-width:1189px) {
    width:370px;
    right:40px;
}


@media (max-width:876px) {
    width:300px;
    right:40px;
}


@media (max-width: 740px) {
position:absolute;
width:80%;
top:490px;
height:590px;
left: 50%;
transform: translateX(-50%);


}


`;



export const Button = styled.button`
cursor: pointer;
width:170px; 
height:45px;
border-radius:15px;
background-color:transparent;
border: 1px solid white;

margin-bottom:20px;

a{
    color:white;
    font-family:${theme.fonts.secondaryFont};
    font-weight:700;
    text-transform:uppercase;
}
`;