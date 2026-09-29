import { useParams } from "react-router-dom";
import { allDestinations } from "../JS service/DestinationsCode";
import { useEffect } from "react";
import { hotels } from "../JS service/AllHotelsCode";

export default function HotelsHero({
  destination,
  setDestination,
  allProvinces,
  setAllProvinces,
  price,
  setPrice,
  sort,
  setSort,
}) {
  const destinationsWIthProvince=allProvinces!=="All"?allDestinations.filter((item)=>item.province===allProvinces):allDestinations
  const destinations = destinationsWIthProvince.map((item) => item.name);
  const provincesAll = allDestinations.map((item) => item.province);
  const provinces = [];
  for (let i = 0; i < provincesAll.length; i++) {
    if (!provinces.includes(provincesAll[i])) {
      provinces.push(provincesAll[i]);
    }
  }

  return (
    <div className="hotels-hero">
      <div className="hotels-hero-intro">
        <h1>Hotels</h1>
        <p>Find your perfect stay with StayFInder</p>
      </div>
      <div className="filters-options">
        <div className="destination-filter">
          <label htmlFor="select-destinaiton-filter">Destination:</label>
          <select
            id="select-destinaiton-filter"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
             
            }}
          >
            <option value="All">All</option>
            {destinations.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="province-filter">
          <label htmlFor="select-province-filter">Province: </label>
          <select
            id="select-province-filter"
            value={allProvinces}
            onChange={(e) => {
              setAllProvinces(e.target.value);
              setDestination("All");
            }}
          >
            <option value="All">All</option>
            {provinces.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="price-filter">
          <label htmlFor="select-price-filter">Price: </label>
          <select
            id="select-price-filter"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="Any Price">Any Price</option>
            <option value="50000">Under 50,000</option>
            <option value="30000">Under 30,000</option>
            <option value="20000">Under 20,000</option>
            <option value="10000">Under 10,000</option>
          </select>
        </div>
        <div className="sort-filter">
          <label htmlFor="select-sort">sort: </label>
          <select
            id="select-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Recommended</option>
            <option value="rating-high">Highest Rated</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
          </select>
        </div>
      </div>
    </div>
  );
}
