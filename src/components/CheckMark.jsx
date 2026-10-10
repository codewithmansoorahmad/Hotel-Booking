import { CheckCircle } from "lucide-react"
import { useSelector } from "react-redux"

export default function CheckMark(){
const data=useSelector((state)=>state.favorite.book)
    
    return <div className="w-full max-h-1/12 p-3 border-2 border-gray-200 ">
        <div className="flex gap-3 border-b p-2 border-gray-200">
        <img className="w-1/4 rounded-lg " src={data.hotelDetails.image} alt="" />
        <div className="">
        <h1 className="font-semibold">{data.hotelDetails.name}</h1>
        <p>{data.hotelDetails.location}</p>
        <p className="flex items-center text-green-600 "><span className="text-green-500"><CheckCircle size={18}/></span>BookingConfirmed</p>
        </div>
        </div >
        <div className="p-2">
        <h1>Your reservation is confirmed</h1>
        <p>Your booking details are ready to view.</p>
        </div>
    </div>
}