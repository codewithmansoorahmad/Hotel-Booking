import { useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
export default function BookNow(){
    const {hotelid}=useParams()
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    console.log(hotelid)
    console.log(hotelDetails)
    return <div className="container mx-auto">
        <button></button>
        <BookingForm/>
    </div>
}