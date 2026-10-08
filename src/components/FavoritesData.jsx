import { Heart, MapPin, Star } from "lucide-react"
import { useSelector } from "react-redux"

export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    return <div className="">
        <h1 className="text-xl text-slate-950 ">Favorite Hotels you added </h1>
        <div className="flex flex-col gap-4 ">

       {
        favoriteHotels.map((item)=>{
            return <div className="w-full rounded-md overflow-hidden flex gap-1 flex-col border px-2 py-2  bg-white border-slate-200 relative shadow-md transition-transform duration-200 hover:-translate-y-1">
                <button className="size-10 bg-white absolute right-3 cursor-pointer rounded-full flex justify-center  items-center top-3 "><Heart/></button>
                <img className="w-full rounded-md" src={item.image} alt="" />
                <div className="w-full px-3 py-2 flex flex-col gap-2 text-slate-700  ">
                <h1>{item.name}</h1>
                <p className="flex items-center gap-1 "><MapPin size={20} strokeWidth={1.5}/>{item.location}</p>
                <p className="flex items-center  gap-1"><Star size={20} strokeWidth={1.5} fill="yellow"/>{item.rating}</p>
                <p>RS:{item.price}</p>
                <p>{item.description}</p>
                <button className="border bg-blue-600 flex justify-center items-center h-10 text-white rounded-md cursor-pointer hover:bg-blue-700">View Details</button>
                </div>
            </div>
        })
       }
        </div>


    </div>
}