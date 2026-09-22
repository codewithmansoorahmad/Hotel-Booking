
import "./css/App.css"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import Header from "./pages/Header"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Hotels from "./pages/Hotels"
import Favorites from "./pages/Favorites"
function App() {

  return (
    <>
    <Routes>
      <Route element={<Header/>} >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/destinations" element={<Destinations/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
     </Route>
     </Routes>  
    </>
  )
}

export default App
