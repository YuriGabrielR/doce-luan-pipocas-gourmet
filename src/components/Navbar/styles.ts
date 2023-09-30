import { styled } from "styled-components";
import { theme } from "../../styles/theme";



export type Props = {

    $show:boolean;

}

export const MenuMobileIcon = styled.div`
display:none;
cursor: pointer;
position:absolute; 
right: 20px;
top:30px;
z-index:12;

@media (max-width:970px) {
    display:block;
}

`

export const Header = styled.header`
position:absolute;
display:flex; 
justify-content:center;
width:100vw;
height:97px;
z-index:70;

`

export const LogoImage = styled.img`
width: 100px;
height:auto;


@media (max-width:970px) {
    position:absolute; 
    left: 20px;
    top:8px;
    z-index:12;
}

`
export const Nav = styled.nav`
position:relative;
display:flex;
justify-content:space-around;
align-items:center;
width:1280px;
height:auto;
padding:12px;



@media (max-width:970px) {
    flex-direction:column;
    justify-content:space-between;
    padding:30px;        
    z-index:10;
    height: 40vh;
}

`

export const ListItemsNav = styled.ul<Props>`
    cursor:pointer;
    display:flex;
    gap:32px;
    transition: 0.4s ease-in-out all;


    li{    
        position:relative;
        transition: 0.3s ease-in-out all;
        font-weight:700;
        font-family: ${theme.fonts.descriptionFont};

        a{
            color:${theme.color.mainColor}; 

            
          &::before{
            content:'';
            position: absolute; 
            bottom:0; 
            left:0; 
            width:0%;
            height:2px; 
            background-color:${theme.color.secondaryColor};
            transition: 0.3s ease-in-out all;
          }


          &:hover::before{
           
            width:100%;
          
            @media (max-width:970px) {
             width:0%;

            }
            
        
         }

        &:hover{
            color:${theme.color.secondaryColor};
        }
        }


       
    }


    @media (max-width:970px) {
        opacity:${({$show})=> ($show ? 1 : 0)};
        position:absolute;
        text-align:center;
        top:100px;
        padding:10px;
        gap:20px;
        flex-direction: column;
        height:200px;
        width:100vw;
        background-color: #EBDECD;
        
    }

`

export const ListSocialMedia = styled.ul<Props>`
display:flex;
gap:10px;


    svg{
        cursor: pointer;
        color:${theme.color.mainColor}; 
        transition: 0.3s ease-in-out all;

        &:hover{
        
        fill:${theme.color.secondaryColor};
    
        }
    }



     @media (max-width:970px) {
        position:absolute;
        opacity:${({$show} )=> $show ? 1 : 0};
        justify-content:center;
        bottom: 3px;       
        width:100vw;
        
    }

`

