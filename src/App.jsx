
import "./css/App.css"
import "./css/Tailwind.css"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import Header from "./pages/Header"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Hotels from "./pages/Hotels"
import Favorites from "./pages/Favorites"
import HotelDetailsPage from "./pages/HotelsDetailPage"
import BookNow from "./pages/BookNow"
import BookingSummary from "./components/BookingSummary"
import ConfirmBook from "./pages/ConfirmBook"
import { useSelector } from "react-redux"
import CheckMark from "./components/CheckMark"
import { useState } from "react"
function App() {
  const [destination,setDestination]=useState(findDestination)
  const [allProvinces,setAllProvinces]=useState(findProvince)
  const [rating,setRating]=useState("")
  const [price,setPrice]=useState("Any Price")
  const [sort,setSort]=useState("")

   const hotelsState = {
    destination,
    setDestination,
    allProvinces,
    setAllProvinces,
    rating,
    setRating,
    price,
    setPrice,
    sort,
    setSort,
  };

  return (
    
    <>
    
    <Routes>
      <Route element={<Header/>} >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/destinations" element={<Destinations/>}/>
      <Route path="/hotels" element={<Hotels {...hotelsState}/>}/>
      <Route path="/hotels/:id" element={<Hotels/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/hotel/:hotelid" element={<HotelDetailsPage/>}/>
      <Route path="/hotel/:hotelid/booking" element={<BookNow/>}/>
      <Route path="/hotel/:hotelid/edit/booking" element={<BookNow/>}/>
      <Route path="/hotel/:hotelid/bookingConfirm" element={<ConfirmBook/>}/>
     </Route>
     </Routes>  
    </>

  )
}

export default App
