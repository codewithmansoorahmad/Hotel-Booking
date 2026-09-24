import { useNavigate } from "react-router-dom";
import DestinationsAll from "./DestinationsAll";

export default function DestinationsMain({selectVal,setSelectVal,destinations,setDestinations}){
    return <div className="main-destinations">
        <h1>---Explore Destinations---</h1>
       
<p>Select a destination and find hotels for your stay.</p>

<h2>Explore Hotels by Destination</h2>

<p>Choose a destination to discover hotels for your stay.</p>

<p>Available Destinations with StayFinder</p>
        <label htmlFor="select">Choose Province</label>
        <select  id="select" value={selectVal} onChange={(e)=>setSelectVal(e.target.value)} >
            <option value="All">All</option>
            <option value="khyberPakhtunkhwa">KhyberPaktunkhwa</option>
            <option value="Sindh">Sindh</option>
            <option value="Punjab">Punjab</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Gilgit">Gilgit</option>
        </select>


        <DestinationsAll selectVal={selectVal} setDestinations={setDestinations} destinations={destinations}/>

<p>
Find the perfect place for your next journey and explore comfortable stays with StayFinder.</p>


    </div>
}