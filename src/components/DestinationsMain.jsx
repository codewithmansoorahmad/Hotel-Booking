import DestinationsAll from "./DestinationsAll";

export default function DestinationsMain({selectVal,setSelectVal,destinations,setDestinations}){
    return <div className="main-destinations">
        <h1>-----------Explore Destinations------------</h1>
        <p>Select Destinations and get hotels</p>
        <label htmlFor="select">Choose Province</label>
        <select  id="select">
            <option value="All">All</option>
            <option value="Khyberpakhtunkhwa">KhyberPaktunkhwa</option>
            <option value="Sindh">Sindh</option>
            <option value="Punjab">Punjab</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Gilgit">Gilgit</option>
        </select>


        <DestinationsAll destinations={destinations}/>

    </div>
}