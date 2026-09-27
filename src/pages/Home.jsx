import HomeHero from "../components/HomeHero"
import HomeHotels from "../components/HomeHotels"
import HomePopularDestinations from "../components/HomePopularDestination"
import "../css/Home.css"
export default function Home(){
    return <div className="home-page">
        <HomeHero/>
        <HomePopularDestinations/>
        <HomeHotels/>

    </div>
}