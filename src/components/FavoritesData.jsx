import { useSelector } from "react-redux"

export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    console.log(favoriteHotels)
    return <div>

    </div>
}