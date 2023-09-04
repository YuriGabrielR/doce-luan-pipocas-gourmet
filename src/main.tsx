import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles.ts'
import { theme } from './styles/theme.ts'
import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

    <GlobalStyle/>
     <App />
    </ThemeProvider>
    
    
   
  </React.StrictMode>,
)
