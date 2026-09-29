import { useEffect, useState } from "react"
import { hotels } from "../JS service/AllHotelsCode"

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
console.log(allHotels)


}
useEffect(()=>{
getHotels()

},[price, sorting, destination,  allProvinces])


    return <div className="hotels-Main">
        {
            allHotels.map
        }

    </div>
} 