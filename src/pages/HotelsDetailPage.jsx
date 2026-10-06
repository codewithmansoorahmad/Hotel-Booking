import { useParams } from "react-router-dom";
import HotelDetailHead from "../components/HotelDetailHead";
import "../css/HotelDetail.css"
import { hotels } from "../JS service/AllHotelsCode";
import ImageCursor from "../components/ImageCursor";
import Amenities from "../components/Amenities";
import ScrollToTop from "../components/ScrollToTop";
export default function HotelDetailsPage() {
       const {hotelid}=useParams()
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    return (

       <div className="Hotels-Detail-page">
        <ScrollToTop/>
        <HotelDetailHead hotelDetails={hotelDetails}/>
        <ImageCursor hotelDetails={hotelDetails}/>
        <Amenities hoteldetails={hotelDetails}/>
</div>
    )
}