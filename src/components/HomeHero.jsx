import { ArrowRight } from "lucide-react";

export default function HomeHero(){
    return <div className="home-hero">
        <div className="hero-info">
            <h1>Welcome to StayFInder</h1>
            <h2>Find Your Perfect Stay</h2>
            <p>Discover comofortable hotes and distinations for your next journey</p>
            <button>Explore Hotels<ArrowRight size={15}/></button>
        </div>

    </div>
}