import { useState } from "react"
import HotelsHero from "../components/HotelsHero"
import { useParams } from "react-router-dom"
import { allDestinations } from "../JS service/DestinationsCode"

export default function Hotels(){
      const {id}=useParams()
  const findDestination=  id ?allDestinations.find((item)=>item.id===Number(id)).name:"All"
const [destination,setDestination]=useState(findDestination)
const [allProvinces,setAllProvinces]=useState("")
const [rating,setRating]=useState("")
const [price,setPrice]=useState(0)
const [sort,setSort]=useState("")
console.log(destination)


 return   <div className="hotels">
    <HotelsHero rating={rating} setRating={setRating} price={price} setPrice={setPrice} sort={sort} setSort={setSort} destination={destination} setDestination={setDestination} allProvinces={allProvinces} setAllProvinces={setAllProvinces}/>



    </div>
}