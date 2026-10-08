import { useSelector } from "react-redux";
import FavoritesData from "../components/FavoritesData";

export default function Favorites(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)

    return <div className="container  mx-auto w-full px-3 py-2 ">
       {favoriteHotels.length>0? < FavoritesData favoriteHotels={favoriteHotels}/>:<h1 className="text-2xl text-center">No Favorite Hotels Available</h1>}
    </div>
}