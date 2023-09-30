import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
display:flex; 
flex-direction:column;
gap:30px;
margin-top:20px;
width:100vw; 
height:auto;
background-color:#eae1d5b0;
padding:20px;
border-top:1px solid ${theme.color.mainColor}; 



`;


export const ContentFooter = styled.div`
display:flex; 
justify-content:center;
max-width:100%;
align-items:center;

gap:50px;

@media (max-width:650px) {
    
    flex-direction:column;
    gap:40px;
}



`;

export const LogoContent = styled.div`
display:flex; 
flex-direction:column;
align-items:center;
gap:20px;



p{
    font-family:${theme.fonts.secondaryFont};
    font-size:15px;
    font-weight:700;
    color:#606060;
    word-wrap:break-word;
    width:90%; 
    text-align:center;
}

span{
    display:flex; 
    gap:8px; 
    justify-content:center;
    align-items:center;

}

`;

export const Logo = styled.img`
width:200px;
height:auto;
background-size:cover;
`;

export const DeliveryContent = styled.div`

display:flex; 
gap:30px; 

span{
    display:flex;
    flex-direction:column; 
    gap:8px;

    h3{
    font-size:16px;
     text-align:center;
     font-family:${theme.fonts.secondaryFont}; 
     color:${theme.color.mainColor};

    }


    p{
    font-family:${theme.fonts.secondaryFont};
    font-size:13px;

    color:#606060;
    word-wrap:break-word;
    width:90%; 
    text-align:center;
    width:100%;
    }

}

@media (max-width:370px) {
    
    flex-direction:column;
}
`; 

export const FooterDeveloper = styled.div`

width:100%; 
 
text-align:center;

p{
    position:relative;
    font-family:${theme.fonts.secondaryFont}; 
    font-size:15px;
    color:${theme.color.mainColor}; 
    display:flex; 
    align-items:center;
    justify-content:center;
    gap:7px;
    padding-top:20px;


    a{
        color:grey; 
        font-weight:700;

    }


    &::after{
        content:''; 
        position:absolute;
        width:20%; 
        top:0;
        height:1px; 
        background-color: gray;
    }

}

`;