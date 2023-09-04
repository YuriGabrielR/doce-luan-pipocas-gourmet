import { IconType } from "react-icons";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";

export const dataNavbar = [

    { to: '#Sobre', 
      text: 'Sobre Nós', 
      id: 'Sobre'

    },

    { to: '#Sabores', 
      text: 'Sabores de Pipoca', 
      id: 'Products'

    },

    { to: '#Encomendas', 
      text: 'Encomendas', 
      id: 'Orders'

    },

];

export const iconStyle = (Icon:IconType) => 
<Icon size={'26px'} color='#D54B2D'/>;

export const SocialMediaIcons = [

  {icon: iconStyle(BsInstagram),
    src: 'https://www.instagram.com/doce_luan/'
  },


  {icon: iconStyle(FaTiktok), 
    src:'https://tiktok.com/@recristiny'
  
  },

  {icon: iconStyle(BsWhatsapp),
   src: 'https://api.whatsapp.com/send?phone=551299676720'
    
  }
]

