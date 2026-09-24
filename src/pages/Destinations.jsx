import { useState } from "react";
import DestinationsHero from "../components/DestinationsHero";
import DestinationsMain from "../components/DestinationsMain";
import "../css/Destinations.css"
import { allDestinations } from "../JS service/DestinationsCode";
export default function Destinations(){
    let [destinations,setDestinations]=useState(allDestinations)
const [selectVal,setSelectVal]=useState("All")

 return   <div className="destinations">
    <DestinationsHero/>
    <DestinationsMain destinations={destinations} setDestinations={setDestinations} selectVal={selectVal} setSelectVal={setSelectVal}/>
    </div>
}