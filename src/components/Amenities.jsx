import { CheckIcon, Star } from "lucide-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { resetBooking } from "../redux/Slice"

export default function Amenities({hoteldetails}){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function clickBookNow(hotel){
localStorage.removeItem("booking")
        navigate("/hotel/"+hotel.id+"/booking")
        dispatch(resetBooking())
    }
    return <div className="amenities">
        <div className="about-hotel">
            <h1>About Hotel</h1>
            <p>{hoteldetails.description}</p>

        </div>
               <div className="hotel-amenities">
                <h1>Amenities</h1>
                {
                    hoteldetails.amenities.map((item,index)=>{
                    return    <p key={index}><span><CheckIcon className="check-icon"/>{item}</span></p>
                    })
                }
            </div>
                 <div className="hotel-services">
                    <h1>Services</h1>
                {
                    hoteldetails.services.map((item,index)=>{
                        return <p key={index}><span><CheckIcon className="check-icon"/>{item}</span></p>
                    })
                }
            </div>
            <div className="information">
                <h1 className="info">Booking Information</h1>
                <img  src={`${import.meta.env.BASE_URL}${hoteldetails.image.slice(1)}`} alt="" />
                <p>RS: {hoteldetails.price} Per Night</p>
                <p><span><Star/>{hoteldetails.rating},{hoteldetails.reviews} reviews</span></p>
                <p>CheckIn: {hoteldetails.checkIn}</p>
                <p>CheckOut: {hoteldetails.checkOut}</p>

                <button onClick={()=>clickBookNow(hoteldetails)}>Book Now</button>


        </div>
    </div>
}