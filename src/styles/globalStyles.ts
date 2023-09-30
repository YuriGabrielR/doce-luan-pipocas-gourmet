
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
// import { theme } from "./theme";



export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0; 
    padding:0;



    //Scroll settings 

    ::-webkit-scrollbar{
        width: 6px;  
        background-color: transparent;

    }

    ::-webkit-scrollbar-thumb{
    background-color: ${theme.color.mainColor};
    border-radius: 10px;


   }

    //Scroll settings 




    body{
        background-position:center;
        /* background-color:#F8E9D0; */
      
        min-width:100vw;
        min-height:100vh;
        
        overflow-x:hidden;
       
    }
    a{
        text-decoration:none;
        outline:none;

        &:visited{

            color :white;
        }
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button{

        border:none;
        padding:none; 
        margin:0;
        padding:0;
        outline:none;

    }


 //Controll slides of Main Slider  
 
    .SwiperContainer{
      
        height:100%;
        width:100%;
        
    };

    .SwiperContainer.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{

        bottom: 50px;


        @media (max-width:800px) {
            
            bottom:12px;
        }
    };

    .swiper-pagination-bullet-active{
        background-color:#D54B2D;
    };

    .containerSlideImage{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        margin: 0 auto;
        height:500px;
        

        @media (max-width:800px) {

            height:auto;
            
        }
    }

    
 @media (max-width:800px) {
    .swiper-wrapper{
        height:400px;
    }
 }

 @media (max-width:400px) {
    .swiper-wrapper{
        height:350px;
    }
 }
//Controll slides of Main Slider  


 //Controll slides of Products 

.Swiper_Products {

    
 .Slide_Products{
    
    flex-shrink:1;
 }

    //Wrapper 
        .swiper-wrapper {
        padding-top:45px;
        gap:30px;


        @media (max-width:545px) {
        gap:15px;

        }


        @media (max-width:405px) {
        gap:0px;

        } 

        .swiper-button-next{

            top:-50px;
        }
      }
    //Wrapper

      //pagination controlls

            .swiper-pagination-bullet-active{
                background-color:${theme.color.secondaryColor};

            }


            .Swiper_Products .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{

                bottom: 50px;
            };
 


      //pagination controlls

}



//Controll slides of Products 



//Orders Slides 

.slide_order{
width:265px; 
height:340px; 


@media (max-width:870px) {
    width:220px; 
    height:320px;
}

@media (max-width: 740px) {
    width:200px; 
    height:280px;
}



@media (max-width: 440px) {
    width:180px; 
    height:260px;
}

.slide_order .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{

bottom:-50px;

};



.swiper-wrapper{
    @media (max-width:800px) {
        height:auto; 
    }
}
}
  

//Orders Slides 


.SwiperContainerOrder{

    .swiper-wrapper{
    @media (max-width:800px) {
        height:100%; 
    }
}
.swiper-button-prev:after, .swiper-button-next:after{
color:${theme.color.mainColor};
font-size: 30px;

 
@media (max-width: 440px) {
   
    font-size:24px;
}
}


.swiper-pagination-bullet-active{
    background-color:${theme.color.mainColor};


}

}



//slide feedbacks 
    .testimonials_slides {
        height:550px;
       
        

         .slide__feedback{
            width:300px;
            height:auto;
            
            margin-top:50px;
          
            padding-left:20px;


            @media (max-width:330px){    

                padding-left:7px;
            }
         } 
        
        
         .swiper-pagination-bullet-active{
            background-color:pink;


        }


        .testimonials_slides .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{

            bottom:80px;

        };
    }
}`



