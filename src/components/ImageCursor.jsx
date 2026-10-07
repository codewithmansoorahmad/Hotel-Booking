import { Heart } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToFavorite } from "../redux/Slice"

export default function ImageCursor({hotelDetails}){
const dispatch=useDispatch()
    const [url,setUrl]=useState(hotelDetails.image)
 return <div className="images-page">
    <h1>{hotelDetails.name} Images</h1>
 
   <div className="image-cursor">

    <div className="main-image">
       <button onClick={()=>dispatch(addToFavorite(hotelDetails))}> <Heart  className="heart" /></button>

        <img src={url} alt="" />
    </div>
    <div className="images">
        {
            hotelDetails.images.map((item,index)=>{
             return    <img src={item} alt="" key={index} onClick={()=>setUrl(item)} className={item==url?"focus":"null"} />
            })
        }
    </div>

    </div>
    </div>
}