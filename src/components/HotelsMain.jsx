import { useEffect, useState } from "react"
import { hotels } from "../JS service/AllHotelsCode"
import HotelsByPage from "./HotelsByPage"
import { Heart, MapPin, Star } from "lucide-react"

export default function HotelsMain({ price, sorting, destination,  allProvinces}){

const [allHotels,setAllHotels]=useState(hotels)
function getHotels(){
    let result=hotels
       if(allProvinces!=="All"){
    const provincesHotels=result.filter((item)=>item.province.toLowerCase()===allProvinces.toLowerCase())
    result=provincesHotels
   }
    if(allProvinces==="All"){
     result=hotels
     }
      if(destination!=="All"){
     const destinationsHotels=result.filter((item)=>item.destination.toLowerCase()===destination.toLowerCase())
     result =destinationsHotels

   }
   

 if(price!=="Any Price"){
     const priceHotels=result.filter((item)=>item.price<Number(price))
     result =priceHotels
 }
// if(price==="Any Price"){

// }
   
    if(sorting==="rating-high"){
       result.sort((a,b)=>b.rating-a.rating)

    }
    if(sorting==="lowest-price"){
       result.sort((a,b)=>a.price-b.price)

    }
    if(sorting==="highest-price"){
    result.sort((a,b)=>b.price-a.price)

    }
setAllHotels(result)


}
useEffect(()=>{
getHotels()
},[price, sorting, destination,  allProvinces])
useEffect(() => {
    console.log(allHotels)
}, [allHotels])
let firstSLice=allHotels.slice(0,9)
    return <div className="hotels-Main">
<h1>{allHotels.length} Hotels Available </h1>
        <div className="hotels-grid">

        {
            firstSLice.map((item)=>{
                return <div className="hotel-page" key={item.id}>
                    <span><Heart/></span>
                    <img src={item.image} width="300px" height="300px" alt="" />
                    <h1>{item.name}</h1>
                    <h2>{item.destination}</h2>
                    <p  ><MapPin className="icon" size={20}/><span>{item.province}</span></p>
                    <p>{item.rating} <Star className="star"/></p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <button>Book Hotel</button>
                </div>
            })
        }
        </div>


<HotelsByPage allHotels={allHotels}/>
    </div>
} 