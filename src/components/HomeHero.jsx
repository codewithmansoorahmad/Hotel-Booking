import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeHero(){
    const navigate=useNavigate()
    return <div className="home-hero">
        <div className="hero-info">
            <h1>Welcome to StayFInder</h1>
            <h2>Find Your Perfect Stay</h2>
            <p>Discover comofortable hotes and distinations for your next journey</p>
            <button onClick={()=>navigate("/hotels")}>Explore Hotels<ArrowRight size={15}/></button>
        </div>

    </div>
}