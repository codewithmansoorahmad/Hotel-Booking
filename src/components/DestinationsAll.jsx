import { MapPin } from "lucide-react";
import { allDestinations } from "../JS service/DestinationsCode";

export default function DestinationsAll(){
    return <div className="destinations-grid">
        {
            allDestinations.map((item)=>{
                return <div className="destiantion" key={item.id}>
                    <img src={item.image} alt="" loading="lazy" />
                    <h1>{item.name}</h1>
                    <p><MapPin/>{item.province}</p>
                </div>
            })
        }
    </div>
}