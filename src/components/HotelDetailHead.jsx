import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { hotels } from "../JS service/AllHotelsCode";

export default function HotelDetailHead(){
    const {hotelid}=useParams()
    console.log(hotelid)
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    console.log(hotelDetails)

   return <div className="Hotel-detail-head">
    <button className="back-btn"><span><ArrowLeft/></span>Back</button>
<h1>{hotelDetails.name}</h1>
.hotel-ratings
    
    </div>
}