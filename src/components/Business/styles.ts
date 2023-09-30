import styled from "styled-components";
import { theme } from "../../styles/theme";
import { StyleProps } from "../../styles/typeGlobalStyles";

export const Container = styled.section`
margin-top:120px;
display:flex; 
justify-content:center;
flex-wrap:wrap;
width:100%;
height:auto;
padding:20px;

@media(max-width:740px){
margin-top:220px;
}
`;

export const ImageContainer = styled.div`
display:flex;
justify-content:center;
width:50%; 
height:auto;


@media (max-width:970px){
    width:100%;

}

`;

export const ImageBusiness = styled.div`
background:url('assets/images/business/business.svg');
background-repeat:no-repeat;
object-fit:cover;
width:450px;
height:500px;

@media (max-width:970px){
    width:400px;
    height:400px;
    
}

@media (max-width:500px){

    width:300px; 
    height:300px;
}
`;

export const TitleBusiness = styled.div<Partial<StyleProps>>`
  display:${({$display})=>($display ? 'flex' : 'none')};
    flex-direction:column;
    align-items:center;
    gap:10px;

    h3{
    font-family:${theme.fonts.descriptionFont}; 
    font-size:28px;
    text-transform:uppercase;
    font-weight:800;
    color:${theme.color.mainColor};
    text-align:center;
    }

    p{
        width:90%;
        font-family:${theme.fonts.descriptionFont};
        color:grey;
        text-align:center;
        font-size:14px;
    }
`; 

export const TextContainer = styled.div`
display:flex; 
flex-direction:column;
align-items:center;
gap:25px;
width:50%;
height:100%;

@media(max-width:970px){
width:90%;
height:auto;

}


ul{
    display:flex; 
    flex-direction:column;
    align-items:center;
    gap:20px;

    h3{
        font-family:${theme.fonts.mainFont};
        color:${theme.color.secondaryColor};
        font-size:20px;
        text-transform:none;
        text-align:center;
    }


    li{
        strong {

        font-size:14px;

        }

        font-family:${theme.fonts.descriptionFont};
        color:grey;
        text-align:center;
        font-size:14px;
        width:80%;


        @media (max-width:600px){

            width:95%;
        }
    

    
    }

    

}

span{
    display:flex; 
    gap:20px;
    align-items:center;

    h4{
        color:${theme.color.mainColor};
        font-family:${theme.fonts.descriptionFont};
    }

    button {
    
        width:200px;
        height:30px;
        padding:5px;
        font-family:${theme.fonts.descriptionFont};
        border-radius:10px;
        background-color:${theme.color.secondaryColor};

        a{
            color: white;
            font-weight:bold;
        }
        
    }
}


`;