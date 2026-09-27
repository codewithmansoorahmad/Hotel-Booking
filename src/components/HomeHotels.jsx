import { hotels } from "../JS service/AllHotelsCode"

export default function HomeHotels(){

    const poularRatedHotels=hotels.sort((a,b)=>b.rating-a.rating)
    console.log(poularRatedHotels.slice(0,6))
    return <div className="home-hotels">

    </div>
}