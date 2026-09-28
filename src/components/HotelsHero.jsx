import { useParams } from "react-router-dom";
import { allDestinations } from "../JS service/DestinationsCode";
import { useEffect } from "react";

export default function HotelsHero({
  destination,
  setDestination,
  allProvinces,
  setAllProvinces,
  rating,
  setRating,
  price,
  setPrice,
  sort,
  setSort,
}) {
    useEffect(()=>{
        console.log(destination)
    },[destination])
    const destinations=allDestinations.map((item)=>item.name)
  

  return <div className="hotels-hero">
    <div className="hotels-hero-intro">

    <h1>Hotels</h1>
    <p>Find your perfect stay with StayFInder</p>
    </div>
    <div className="filters-options">
        <div className="destination-filter">
            <label htmlFor="select-destinaiton-filter">
                Destination
            </label>
            <select  id="select-destinaiton-filter"  onChange={(e)=>setDestination(e.target.value)}>
                <option value="All">All</option>
{
    destinations.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
}
            </select>
        </div>

    </div>


  </div>;
}
