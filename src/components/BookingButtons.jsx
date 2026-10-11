import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getConfirmed} from "../redux/Slice"
import { useNavigate } from "react-router-dom"
export default function BookingButtons(){
const data=useSelector((state)=>state.favorite.book)

    const navigate=useNavigate()
    const [isState,setIsState]=useState(false)
    const dispatch=useDispatch()
async function getBooking(){
    await new Promise(res=>setTimeout(res,2000))
    setIsState(true)
dispatch(getConfirmed())
navigate(`/hotel/${data.hotelDetails.id}/booking`)
}
    return <div className=" w-full py-2  px-2  my-2 flex flex-col gap-2" >
        <button className="w-full rounded-lg text-white cursor-pointer h-10 bg-green-800 hover:bg-green-700" disabled={isState}  onClick={getBooking} >{isState && <span className="size-6 rounded-full border-gray-200 border-2 border-t-4 border-t-blue-300 animate-spin"></span>}{isState?
        "Booking...":"Confirm Booking"}</button>
        <button className="w-full border-gray-200 cursor-pointer border-2 h-10 font-semibold rounded-lg">Edit Booking</button>
        <button className="w-full border-gray-200 text-red-500 cursor-pointer font-semibold hover:text-red-600  border-2 h-10 rounded-lg">Cancel</button>
    </div>
}