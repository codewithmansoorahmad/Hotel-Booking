import { ArrowLeft, MapPin, Star } from "lucide-react";
import { useNavigate, } from "react-router-dom";

export default function HotelDetailHead({hotelDetails}){
    const navigate=useNavigate()
 

   return <div className="Hotel-detail-head">

    <button className="back-btn" onClick={()=>navigate(-1)}><span><ArrowLeft/></span>Back</button>
<h1>{hotelDetails.name}</h1>
<div className="hotel-ratings">
    <p><span><Star/><Star/><Star/><Star/><Star/></span>{hotelDetails.rating}</p>
    <p>{hotelDetails.reviews} reviews</p>
</div>
    <div className="hotel-location">
        <p><span><MapPin/></span> {hotelDetails.location},</p>
        <p>{hotelDetails.province}</p>

    </div>
    </div>
}