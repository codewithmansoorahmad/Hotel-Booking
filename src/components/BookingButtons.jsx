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
    setIsState(true)

    await new Promise(res=>setTimeout(res,2000))
    setIsState(false)
dispatch(getConfirmed())
navigate(`/hotel/${data.hotelDetails.id}/booking`)
localStorage.removeItem("booking")
}


function cancelBooking(){
  navigate("/hotel/"+data.hotelDetails.id)
}
    return <div className=" w-full py-2  px-2  my-2 flex flex-col gap-2" >
<button
  className="flex w-full h-10 items-center justify-center gap-2 rounded-lg bg-green-800 text-white hover:bg-green-700 disabled:cursor-not-allowed"
  disabled={isState}
  onClick={getBooking}
>
  {isState && (
    <span className="inline-block size-5 shrink-0 animate-spin rounded-full border-2 border-solid border-gray-200 border-t-blue-400"></span>
  )}
  {isState ? "Booking..." : "Confirm Booking"}
</button>
        <button className="w-full border-gray-200 cursor-pointer border-2 h-10 font-semibold rounded-lg" onClick={()=>navigate(`/hotel/${data.hotelDetails.id}/edit/booking`)}>Edit Booking</button>
        <button className="w-full border-gray-200 text-red-500 cursor-pointer font-semibold hover:text-red-600  border-2 h-10 rounded-lg" onClick={cancelBooking}>Cancel</button>
    </div>
}