import { MapPin } from "lucide-react"
import { useSelector } from "react-redux"

export default function BookingSummary({data}){

const room=data.hotelDetails.roomTypes.find((item)=>item.name==data.room)
    return <div className="w-full py-2 border-2 border-gray-200 px-2 my-2 rounded-lg">
       
        <div className="flex gap-2 mt-3 py-2 border-b-2 border-gray-100 ">
            <img src={data.hotelDetails.image} alt="" className="w-[30%] rounded-md " />
            <div className="flex flex-col gap-1 text-[12px]">
            <h1 className="text-[12px]">{data.hotelDetails.name}</h1>
            <p className="flex items-center text-[12px] "><MapPin size={14} strokeWidth={1.5}/>{data.hotelDetails.location}</p>
            <p >{data.room}</p>
            <p >PKR {room.price}/night</p>
            </div>
</div>
<div className="flex justify-between text-[12px] text-gray-700  ">
    <div className="">
        <p>Check In</p>
        <p className="font-bold">{data.checkInDate}</p>
        <p>{data.hotelDetails.checkIn}</p>
    </div>
    <div className="mr-3">
        <p>Check Out</p>
        <p className="font-bold">{data.checkOutDate}</p>
        <p>{data.hotelDetails.checkOut}</p>
    </div>
</div>





    </div>
}