import { Heart, MapPin, Star } from "lucide-react"
import { useSelector } from "react-redux"

export default function FavoritesData(){
    const favoriteHotels=useSelector((state)=>state.favorite.hotels)
    return <div className="">
        <h1 className="text-xl text-slate-950 ">Favorite Hotels you added </h1>
        <div className="flex flex-col gap-4 ">

       {
        favoriteHotels.map((item)=>{
            return <div className="w-full rounded-sm flex gap-1 flex-col border bg-white border-slate-200 relative">
                <button className="size-10 bg-white absolute right-2 cursor-pointer rounded-full flex justify-center  items-center top-2"><Heart/></button>
                <img className="w-full " src={item.image} alt="" />
                <div className="w-full px-2 py-1 ">
                <h1>{item.name}</h1>
                <p className="flex items-center gap-1 "><MapPin size={20} strokeWidth={1.5}/>{item.location}</p>
                <p className="flex items-center  gap-1"><Star size={20} strokeWidth={1.5} fill="yellow"/>{item.rating}</p>
                <p>RS:{item.price}</p>
                <p>{item.description}</p>
                <button>View Details</button>
                </div>
            </div>
        })
       }
        </div>


    </div>
}