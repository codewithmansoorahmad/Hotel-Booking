import { useNavigate } from "react-router-dom"

export default function AboutHero(){
    const navigate=useNavigate()
    return <div className="about-hero">
        <h1>About StayFinder</h1>
        <p>Find a stay that feels like home.</p>
        <p>Discover hotels and destinations across pakistan in ease.</p>
<p>Your journey to perfect stay.</p>
        <button onClick={()=>navigate("/hotels")}>Explore Hotels</button>
    </div>
}