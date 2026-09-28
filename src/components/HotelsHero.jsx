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
   console.log(allProvinces)
    const destinations=allDestinations.map((item)=>item.name)
    const provinces=allDestinations.map((item)=>item.province)

  

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
            <select  id="select-destinaiton-filter"  value={destination} onChange={(e)=>setDestination(e.target.value)}>
                <option value="All">All</option>
{
    destinations.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
}

            </select>
        </div>

        <div className="province-filter">
            <label htmlFor="select-province-filter"></label>
            <select  id="select-province-filter" value={allProvinces} onChange={(e)=>{setAllProvinces(e.target.value);setDestination("All")}}>
                <option value="All">All</option>
              {
    provinces.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
}
            </select>

        </div>

        <div className="price-filter">
            <select  id="select-price-filter" value={price} onChange={(e)=>setPrice(e.target.value)}>
                <option value="Any Price">Any Price</option>
                <option value="30000">Above 30000</option>
                <option value="20000">Above 20000</option>
                <option value="10000">Above 10000</option>
                <option value="1000">Above 1000</option>
            </select>
        </div>

    </div>


  </div>;
}
