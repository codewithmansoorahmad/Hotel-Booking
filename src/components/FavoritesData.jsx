import { Heart, MapPin, Star } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {removeFromFavorites} from "../redux/Slice"
export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    return <div className="">
        <h1 className="text-xl text-slate-950 my-2 ">Your Favorite Hotels </h1>
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3 ">

       {
        favoriteHotels.map((item)=>{
            return <div className="w-full rounded-md overflow-hidden flex gap-1 flex-col border px-2 py-2  bg-white border-slate-200 relative shadow-md transition-transform duration-400 hover:-translate-y-1 sm:h-135 ">
                <button onClick={()=>dispatch(removeFromFavorites(item))} className="size-10 bg-white absolute right-3 cursor-pointer rounded-full flex justify-center  items-center top-3 "><Heart fill="red"/></button>
                <img className="w-full sm:h-40 md:h-50 rounded-md" src={item.image} alt="" />
                <div className="w-full px-3 py-2 flex flex-col gap-2 text-slate-700  ">
                <h1>{item.name}</h1>
                <p className="flex items-center gap-1 "><MapPin size={20} strokeWidth={1.5}/>{item.location}</p>
                <p className="flex items-center  gap-1"><Star size={20} strokeWidth={1.5} fill="yellow"/>{item.rating}</p>
                <p>RS:{item.price}</p>
                <p>{item.description}</p>
                </div>
                <button onClick={()=>navigate(`/hotel/${item.id}`)} className="border bg-blue-600 flex justify-center w-full items-center h-10 text-white rounded-md cursor-pointer hover:bg-blue-700  sm:absolute sm:w-68 bottom-3 left-3 right-3  ">View Details</button>
            </div>
        })
       }
        </div>


    </div>
}