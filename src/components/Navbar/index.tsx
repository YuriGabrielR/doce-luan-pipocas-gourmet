import {useState} from 'react';
import { Header, LogoImage, Nav, ListItemsNav, ListSocialMedia, MenuMobileIcon } from "./styles";
import { SocialMediaIcons, dataNavbar } from "./data";
import {HiMenuAlt3} from 'react-icons/hi';
import { theme } from "../../styles/theme";
import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';



export default function Navbar() {

  const [show, setShow] = useState<boolean>(false); 

  const handleClick = ()=>{

    setShow(!show);
  }

  return (

    <Header>

      <Nav>
     
        <LogoImage src="assets\images\logos\logo.png" />

        <MenuMobileIcon onClick={handleClick}>
      
          {show ? 
          <FaTimes color={theme.color.mainColor} size='30px'/> : 
          
          <HiMenuAlt3 color={theme.color.mainColor} size='30px' />
          
          }
         
  
          
          </MenuMobileIcon>
        

        <ListItemsNav $show={show}>
          {dataNavbar.map((data, index) => (

            <li key={index}>


              <Link to={data.to} spy={true} smooth={true} offset={-160} duration={500} href="">{data.text} </Link>
              
            
            
            </li>
            
          ))}
        </ListItemsNav>

        <ListSocialMedia $show={show}>

          {SocialMediaIcons.map((icon, index) => (

            <li key={index}>
              
              <a target="_blank" href={icon.src}>{icon.icon}</a>
              
            
            </li>

          ))
          }

        </ListSocialMedia>
      </Nav>

         


    </Header>

  )
}
