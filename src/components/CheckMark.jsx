import { CheckCircle } from "lucide-react"
import { useSelector } from "react-redux"

export default function CheckMark(){
const data=useSelector((state)=>state.favorite.book)
    
    return <div className="w-full max-h-1/12 p-3 border-2 flex gap-3 border-b  border-gray-200   ">
        
        <img className="w-1/4 rounded-lg " src={data?.hotelDetails?.image} alt="" />
        <div className="flex flex-col gap-1.5 text-gray-600 text-[14px]">
        <h1 className="font-semibold">{data?.hotelDetails?.name}</h1>
        <p>{data?.hotelDetails?.location}</p>
        <p className="flex items-center text-green-600 font-semibold gap-1 "><span className="text-green-500"><CheckCircle size={18}/></span>BookingConfirmed</p>
        </div>
    </div>
}