import { useEffect, useState } from "react"
import { hotels } from "../JS service/AllHotelsCode"

export default function HotelsMain({ price, sorting, destination,  allProvinces}){

const [allHotels,setAllHotels]=useState(hotels)
const [allPrice,setAllPrice]=useState(null)
function getHotels(){
    let result=hotels
       if(allProvinces!=="All"){
    const provincesHotels=result.filter((item)=>item.province.toLowerCase()===allProvinces.toLowerCase())
    setAllHotels(provincesHotels)
   }
    if(allProvinces==="All"){
     setAllHotels(hotels)
     }
      if(destination!=="All"){
     const destinationsHotels=result.filter((item)=>item.destination.toLowerCase()===destination.toLowerCase())
    //  setAllHotels(destinationsHotels)
     result =priceHotels

   }
   
 if(price=="Any Price"){
     result =priceHotels

 }
 if(price!=="Any Price"){
     const priceHotels=result.filter((item)=>item.price<Number(price))
     result =priceHotels
 }

   
    if(sorting==="rating-high"){
        const sortHighRating=result.sort((a,b)=>b.rating-a.rating)
        console.log(sortHighRating)
        return
    }
    if(sorting==="lowest-price"){
        const sortLowestPrice=result.sort((a,b)=>a.price-b.price)
        return
    }
    if(sorting==="highest-price"){
        const sortHighestPrice=result.sort((a,b)=>b.price-a.price)
        return 
    }
//    



}
useEffect(()=>{
getHotels()
},[price, sorting, destination,  allProvinces])

const hotelsMap=allPrice===null?allHotels:allPrice
console.log(hotelsMap)

    return <div className="hotels-Main">
        

    </div>
} 