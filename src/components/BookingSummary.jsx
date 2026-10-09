import { MapPin, Star } from "lucide-react"
import { useSelector } from "react-redux"

export default function BookingSummary(){
const data=useSelector((state)=>state.favorite.book)
console.log(data)
const room=data.hotelDetails.roomTypes.find((item)=>item.name==data.room)
    return <div className="w-full px-6 py-4">
        
        <div>
            <img src={data.hotelDetails.image} alt="" />
            <h1>{data.hotelDetails.name}</h1>
            <p><MapPin/>{data.hotelDetails.location}</p>
            <p>{data.room}</p>
            <p>PKR {room.price}/night</p>
        </div>
    </div>
}