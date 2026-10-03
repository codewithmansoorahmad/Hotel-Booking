
import "./css/App.css"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import Header from "./pages/Header"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Hotels from "./pages/Hotels"
import Favorites from "./pages/Favorites"
import Footer from "./pages/Footer"
import HotelDetailsPage from "./pages/HotelsDetailPage"
function App() {

  return (
    <>
    <Routes>
      <Route element={<Header/>} >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/destinations" element={<Destinations/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/hotels/:id" element={<Hotels/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/hotel/:id" element={<HotelDetailsPage/>}/>
     </Route>
     </Routes>  
    </>

  )
}

export default App
