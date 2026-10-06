import { Star } from "lucide-react"

export default function BookingSummary({hotelDetails,paymentMethod,room,checkInDate,checkOutDate}){
    const day1=new Date(checkInDate).getDate()
    const day2=new Date(checkOutDate).getDate()
    console.log(day2-day1)
    const rooms=hotelDetails.roomTypes.find((item)=>item.name===room)
    console.log(room)
    console.log(rooms)
    console.log(paymentMethod)
    return <div className="w-full px-6 py-4">
        <h1 className="my-4 text-xl border-b border-b-black">Booking Summary</h1>
        <h2>{hotelDetails.name}</h2>
        <p>{hotelDetails.location}</p>
        <p><span><Star/></span>{hotelDetails.rating}</p>
        <p>Room: {rooms.name}</p>
        <p>RS:{rooms.price}/night</p>
        <p>checkIn:{checkInDate}</p>
        <p>checkOut:{checkOutDate}</p>
        <p>PaymentMethod:{paymentMethod}</p>
    </div>
}