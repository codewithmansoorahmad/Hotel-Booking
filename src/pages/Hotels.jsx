import { useState } from "react"
import HotelsHero from "../components/HotelsHero"
import { useParams } from "react-router-dom"
import { allDestinations } from "../JS service/DestinationsCode"
import "../css/Hotels.css"
import HotelsMain from "../components/HotelsMain"

export default function Hotels(){
      const {id}=useParams()
  const findDestination=  id ?allDestinations.find((item)=>item.id===Number(id)).name:"All"
  const findProvince=  id ?allDestinations.find((item)=>item.id===Number(id)).province:"All"
const [destination,setDestination]=useState(findDestination)
const [allProvinces,setAllProvinces]=useState(findProvince)
const [rating,setRating]=useState("")
const [price,setPrice]=useState(0)
const [sort,setSort]=useState("")


 return   <div className="hotels">
    <HotelsHero rating={rating} setRating={setRating} price={price} setPrice={setPrice} sort={sort} setSort={setSort} destination={destination} setDestination={setDestination} allProvinces={allProvinces} setAllProvinces={setAllProvinces}/>
    <HotelsMain price={price}  sorting={sort}  destination={destination}  allProvinces={allProvinces} />



    </div>
}