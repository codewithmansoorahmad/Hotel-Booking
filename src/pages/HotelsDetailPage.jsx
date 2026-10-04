import { useParams } from "react-router-dom";
import HotelDetailHead from "../components/HotelDetailHead";
import "../css/HotelDetail.css"
import { hotels } from "../JS service/AllHotelsCode";
import ImageCursor from "../components/ImageCursor";
import Amenities from "../components/Amenities";
export default function HotelDetailsPage() {
       const {hotelid}=useParams()
    console.log(hotelid)
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    console.log(hotelDetails)
    return (
       <div className="Hotels-Detail-page">
        <HotelDetailHead hotelDetails={hotelDetails}/>
        <ImageCursor hotelDetails={hotelDetails}/>
        <Amenities hoteldetails={hotelDetails}/>
</div>
    )
}