import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import OurPortfolio from "./Portfolio/OurPortfolio"
import Error from "./Pages/Error"
import SharedLayout from "./Pages/SharedLayout"
import Contact from "./Pages/Contact"

const App = () => {
  return <BrowserRouter>
    <Routes>
       <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Aboutus" element={<AboutUs/>}/>
            <Route path="/OurPortfolio" element={<OurPortfolio/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
       </Route>
    </Routes>
    
    </BrowserRouter>
}

export default App