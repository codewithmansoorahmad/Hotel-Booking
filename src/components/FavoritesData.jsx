import { Heart, MapPin, Star } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {removeFromFavorites} from "../redux/Slice"
export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    return <div className="">
        <h1 className="text-xl text-slate-950 ">Favorite Hotels you added </h1>
        <div className="flex flex-col gap-4 ">

       {
        favoriteHotels.map((item)=>{
            return <div className="w-full rounded-md overflow-hidden flex gap-1 flex-col border px-2 py-2  bg-white border-slate-200 relative shadow-md transition-transform duration-200 hover:-translate-y-1">
                <button onClick={()=>dispatch(removeFromFavorites(item))} className="size-10 bg-white absolute right-3 cursor-pointer rounded-full flex justify-center  items-center top-3 "><Heart fill="red"/></button>
                <img className="w-full rounded-md" src={item.image} alt="" />
                <div className="w-full px-3 py-2 flex flex-col gap-2 text-slate-700  ">
                <h1>{item.name}</h1>
                <p className="flex items-center gap-1 "><MapPin size={20} strokeWidth={1.5}/>{item.location}</p>
                <p className="flex items-center  gap-1"><Star size={20} strokeWidth={1.5} fill="yellow"/>{item.rating}</p>
                <p>RS:{item.price}</p>
                <p>{item.description}</p>
                <button onClick={()=>navigate(`/hotel/${item.id}`)} className="border bg-blue-600 flex justify-center items-center h-10 text-white rounded-md cursor-pointer hover:bg-blue-700">View Details</button>
                </div>
            </div>
        })
       }
        </div>


    </div>
}