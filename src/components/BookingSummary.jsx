import { MapPin } from "lucide-react"
import { useSelector } from "react-redux"

export default function BookingSummary(){
const data=useSelector((state)=>state.favorite.book)
console.log(data)
const room=data.hotelDetails.roomTypes.find((item)=>item.name==data.room)
    return <div className="w-full py-2 border-2 border-gray-200 px-2">
       
        <div className="flex gap-2 mt-3">
            <img src={data.hotelDetails.image} alt="" className="w-[30%] rounded-md border-b-2 border-gray-200" />
            <div className="flex flex-col gap-1 text-[12px]">
            <h1 className="text-[12px]">{data.hotelDetails.name}</h1>
            <p className="flex items-center text-[12px] "><MapPin size={14} strokeWidth={1.5}/>{data.hotelDetails.location}</p>
            <p >{data.room}</p>
            <p >PKR {room.price}/night</p>
            </div>
</div>
<div>
    <div>
        <p>Check In</p>
        <p>{data.checkIn}</p>
    </div>
</div>

    </div>
}