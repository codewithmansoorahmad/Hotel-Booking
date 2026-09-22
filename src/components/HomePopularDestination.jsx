import { ArrowRight, MapPin } from "lucide-react"
import { popularDestinations } from "../JS service/DestinationsCode"

export default function HomePopularDestinations(){
    let destiations=popularDestinations
    return <div className="home-destinations">
        <div className="popular-info">
            <div>
            <h1>Explore</h1>
            <h2>Popular Destinations</h2>
            <p>Discover amazing places and find perfect stay.</p>
</div>
<div>
<button>View All destinations <ArrowRight/></button>
</div>
        </div>

        <div className="destinations-grid">
        {
            destiations.map((item,index)=>{
return <div className="destination" key={index}>
    <img src={item.image} alt="" />
    <p className="name">{item.name}</p>
    <p><MapPin size={14}/>{item.province}</p>
</div>
            })
        }
        </div>


    </div>
}