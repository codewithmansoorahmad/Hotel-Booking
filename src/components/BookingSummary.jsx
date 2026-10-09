import { MapPin, Star } from "lucide-react"

export default function BookingSummary({hotelDetails,paymentMethod,room,checkInDate,checkOutDate}){
    const day1=new Date(checkInDate).getDate()
    const day2=new Date(checkOutDate).getDate()
    console.log(day2-day1)
    const rooms=hotelDetails.roomTypes.find((item)=>item.name===room)
    return <div className="w-full px-6 py-4">
        <h1>Review Your Booking</h1>
        <p>Please check your details before confirming your reservation.</p>
        <div>
            <img src={hotelDetails.name} alt="" />
            <h1>{hotelDetails.name}</h1>
            <p><MapPin/>{hotelDetails.location}</p>
            <p>{room}</p>
            <p>PKR {rooms.price}/night</p>
        </div>
    </div>
}