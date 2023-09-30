import About from "./components/About"
import Business from "./components/Business"
import Feedbacks from "./components/Feedbacks"
// import FloatWhatsApp from "./components/FloatWhatsApp"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Orders from "./components/Orders"
import Products from "./components/Products"

function App() {


  return (
    <>

    <Navbar/>
    <Main/>
    <About/>
    <Products/>
    <Orders/>
    <Business/>
    <Feedbacks/>   
    <Footer/>
    
    {/* <FloatWhatsApp/> */}
    </>
  )
}

export default App
