import { useEffect, useState } from "react"
import { hotels } from "../JS service/AllHotelsCode"

export default function HotelsMain({ price, sorting, destination,  allProvinces}){

const [allHotels,setAllHotels]=useState(hotels)
function getHotels(){
    if(sorting==="rating-high"){
        const sortHighRating=allHotels.sort((a,b)=>a.rating-b.rating)
        console.log(sortHighRating)
        console.log(allHotels,sorting)
    }
    if(sorting==="lowest-price"){
        const sortLowestPrice=allHotels.sort((a,b)=>b.price-a.price)
        console.log(sortLowestPrice)
    }
    if(sorting==="highest-price"){
        const sortHighestPrice=allHotels.sort((a,b)=>a.price-b.price)
        console.log(sortHighestPrice)
    }
    if(destination==="All" && allProvinces==="All" && price==="Any Price" ){
        setAllHotels(hotels)
    }
    const provincesHotels=hotels.filter((item)=>item.province.toLowerCase()===allProvinces.toLowerCase())
    console.log(provincesHotels)
    setAllHotels(provincesHotels)
    const destinationsHotels=hotels.filter((item)=>item.destination===destination)
    console.log(destinationsHotels)
    setAllHotels(destinationsHotels)

    const priceHotels=hotels.filter((item)=>item.price<Number(price))
    setAllHotels(priceHotels)


    



}
useEffect(()=>{
getHotels()
},[price, sorting, destination,  allProvinces])

    return <div className="hotels-Main">
        

    </div>
} 