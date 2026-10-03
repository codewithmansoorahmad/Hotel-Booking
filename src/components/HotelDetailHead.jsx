import { ArrowLeft, MapPin, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { hotels } from "../JS service/AllHotelsCode";

export default function HotelDetailHead(){
    const {hotelid}=useParams()
    console.log(hotelid)
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    console.log(hotelDetails)
    const navigate=useNavigate()

   return <div className="Hotel-detail-head">

    <button className="back-btn" onClick={()=>navigate(-1)}><span><ArrowLeft/></span>Back</button>
<h1>{hotelDetails.name}</h1>
<div className="hotel-ratings">
    <p><span><Star/><Star/><Star/><Star/><Star/></span>{hotelDetails.rating}</p>
    <p>{hotelDetails.reviews}</p>
</div>
    <div className="hotel-location">
        <p><span><MapPin/></span> {hotelDetails.destination},</p>
        <p>{hotelDetails.province}</p>

    </div>
    </div>
}