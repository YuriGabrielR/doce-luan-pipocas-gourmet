import { IconType } from "react-icons";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import { theme } from "../../styles/theme";


export const iconStyle = (Icon:IconType) => 
<Icon size={'26px'} color={theme.color.mainColor}/>;

export const Icons = [

  {icon: iconStyle(BsInstagram),
    src: 'https://www.instagram.com/recristiny/'
  },


  {icon: iconStyle(FaTiktok), 
    src:'https://tiktok.com/@recristiny'
  
  },

  {icon: iconStyle(BsWhatsapp),
   src: 'https://api.whatsapp.com/send?phone=551299676720'
    
  }
];

