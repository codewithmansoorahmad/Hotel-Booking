import { Heart, MapPin, Star } from "lucide-react"
import { useSelector } from "react-redux"

export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    console.log(favoriteHotels)
    return <div>
        <h1>Favorite Hotels you added </h1>
       {
        favoriteHotels.map((item)=>{
            return <div>
                <button><Heart/></button>
                <img src={item.image} alt="" />
                <div>
                <h1>{item.name}</h1>
                <p><MapPin/>{item.location}</p>
                <p><Star/>{item.rating}</p>
                <p>RS:{item.price}</p>
                <p>{item.description}</p>
                <button>View Details</button>
                </div>
            </div>
        })
       }


    </div>
}