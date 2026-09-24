import { MapPin } from "lucide-react";
import { allDestinations } from "../JS service/DestinationsCode";
import { useEffect } from "react";

export default function DestinationsAll({destinations,setDestinations,selectVal}){
function getDestinations(){
    let destinationsWithFilter=allDestinations.filter((item)=>item.province===selectVal)
    if(selectVal==="All"){
        setDestinations(allDestinations)
    }else{
        setDestinations(destinationsWithFilter)
    }
}
useEffect(()=>{
getDestinations()

},[selectVal])

  
    return <div className="destinations-grid">
        {
            destinations.map((item)=>{
                return <div className="destiantion" key={item.id}>
                    <img src={item.image} alt="" loading="lazy" />
                    <h1>{item.name}</h1>
                    <p><MapPin/>{item.province}</p>
                </div>
            })
        }
    </div>
}