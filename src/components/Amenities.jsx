import { CheckIcon, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Amenities({hoteldetails}){
    const navigate=useNavigate()
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
                <img src={hoteldetails.image} alt="" />
                <p>RS: {hoteldetails.price} Per Night</p>
                <p><span><Star/>{hoteldetails.rating},{hoteldetails.reviews} reviews</span></p>
                <p>CheckIn: {hoteldetails.checkIn}</p>
                <p>CheckOut: {hoteldetails.checkOut}</p>

                <button onClick={()=>{navigate("/hotel/git comm"+hoteldetails.id+"/booking")}}>Book Now</button>


        </div>
    </div>
}