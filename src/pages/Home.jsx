import HomeHero from "../components/HomeHero"
import HomePopularDestinations from "../components/HomePopularDestination"
import "../css/Home.css"
export default function Home(){
    return <div className="home-page">
        <HomeHero/>
        <HomePopularDestinations/>

    </div>
}