import { CheckIcon, Star } from "lucide-react"

export default function Amenities({hoteldetails}){
    return <div className="amenities">
        <div className="about-hotel">
            <h1>About Hotel</h1>
            <p>{hoteldetails.description}</p>
            <div className="hotel-amenities">
                {
                    hoteldetails.amenities.map((item,index)=>{
                    return    <p key={index}><span><CheckIcon className="check-icon"/>{item}</span></p>
                    })
                }
            </div>
       
        </div>
        <div className="hotel-information">
                 <div className="hotel-services">
                {
                    hoteldetails.services.map((item,index)=>{
                        return <p key={index}><span><CheckIcon className="check-icon"/>{item}</span></p>
                    })
                }
            </div>
            <div className="information">
                <p>RS: {hoteldetails.price} Per Night</p>
                <p><span><Star/>{hoteldetails.rating},{hoteldetails.reviews}reviews</span></p>
                <button>Book Now</button>


            </div>
        </div>
    </div>
}