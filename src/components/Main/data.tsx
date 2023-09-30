import { IconType } from "react-icons"
import { BsFillBagHeartFill } from "react-icons/bs"
import { PiPopcorn } from "react-icons/pi"
import { TbTruckDelivery } from "react-icons/tb"



export const iconStyle = (Icon:IconType) => 
<Icon size={'30px'} color = 'grey'/>



export const BoxMainData = [

    {icon: iconStyle(PiPopcorn), 
     title: 'Pipocas Artesanais',
     description: 'Todas nossas pipocas são feitas de forma artesanal.' 
    }, 

    {icon: iconStyle(BsFillBagHeartFill), 
     title: 'Encomendas',
     description: 'Encomendas personalizadas de acordo com seu agrado' 
    }, 

    {icon: iconStyle(TbTruckDelivery), 
     title: 'Entregas',
     description: 'Levamos nossos sabores especiais até a sua casa.' 
    }, 
]