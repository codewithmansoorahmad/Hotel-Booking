import { Star } from "lucide-react"
import { hotels } from "../JS service/AllHotelsCode"

export default function HomeHotels(){

    const poularRatedHotels=hotels.sort((a,b)=>b.rating-a.rating)
    const homeHotels=poularRatedHotels.slice(0,6)
    return <div className="home-hotels">
        <h1>Highest Rated Hotels In StayFinder.</h1>
        {
            homeHotels.map((hotel)=>{
                return <div className="hotel" key={hotel.id}>
                    <img src={hotel.image} alt="" />
                    <h1>{hotel.name}</h1>
                    <h2>Rating: {hotel.rating} <Star size={20} className="star"/></h2>
                    <h3>{hotel.destination}</h3>
                    <p>{hotel. description}</p>
                </div>
            })
        }

    </div>
}