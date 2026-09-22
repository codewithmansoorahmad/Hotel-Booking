import { popularDestinations } from "../JS service/DestinationsCode"

export default function HomePopularDestinations(){
    let destiations=popularDestinations
    return <div className="home-destinations">
        <div className="popular-info">
            <h1>Explore</h1>
            <h2>Popular Destinations</h2>
            <p>Discover amazing places and find perfect stay.</p>

        </div>
        <div className="destinations-grid">

        {
            destiations.map((item)=>{
return <div className="destination">
    <img src={item.image} alt="" />
    <p className="name">{item.name}</p>
    <p>{item.province}</p>
</div>
            })
        }
        </div>


    </div>
}