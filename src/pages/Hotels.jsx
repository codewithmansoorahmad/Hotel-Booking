import { useState } from "react"
import HotelsHero from "../components/HotelsHero"

export default function Hotels(){
const [allDestinations,setAllDestinations]=useState("")
const [allProvinces,setAllProvinces]=useState("")
const [rating,setRating]=useState("")
const [price,setPrice]=useState(0)
const [sort,setSort]=useState("")


 return   <div className="hotels">
    <HotelsHero rating={rating} setRating={setRating} price={price} setPrice={setPrice} sort={sort} setSort={setSort} allDestinations={allDestinations} setAllDestinations={setAllDestinations} allProvinces={allProvinces} setAllProvinces={setAllProvinces}/>
    


    </div>
}