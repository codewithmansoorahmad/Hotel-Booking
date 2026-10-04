import { Heart } from "lucide-react"
import { useState } from "react"

export default function ImageCursor({hotelDetails}){

    const [url,setUrl]=useState(hotelDetails.image)
 return <div className="images-page">
    <h1>{hotelDetails.name} Images</h1>
 
   <div className="image-cursor">

    <div className="main-image">
        <span><Heart  className="heart" /></span>

        <img src={url} alt="" />
    </div>
    <div className="images">
        {
            hotelDetails.images.map((item,index)=>{
             return    <img src={item} alt="" key={index} onClick={()=>setUrl(item)} />
            })
        }
    </div>

    </div>
    </div>
}