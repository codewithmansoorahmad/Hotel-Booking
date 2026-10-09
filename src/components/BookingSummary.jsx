import { MapPin, Star } from "lucide-react"
import { useSelector } from "react-redux"

export default function BookingSummary(){
const data=useSelector((state)=>state.favorite.book)
console.log(data)
    return <div className="w-full px-6 py-4">
        <h1>Hotel Booking</h1
        >
        {/* <h1>Review Your Booking</h1>
        <p>Please check your details before confirming your reservation.</p>
        <div>
            <img src={hotelDetails.name} alt="" />
            <h1>{hotelDetails.name}</h1>
            <p><MapPin/>{hotelDetails.location}</p>
            <p>{room}</p>
            <p>PKR {rooms.price}/night</p>
        </div> */}
    </div>
}