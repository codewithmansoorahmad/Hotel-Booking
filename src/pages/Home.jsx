import { Hotel, House } from "lucide-react"
import NavBar from "../components/NavBar"

export default function HomePage(){
return <header>
    <div className="logo">
        <House size={30} strokeWidth={1}/>
        <span>StayFinder</span>
    </div>
<NavBar/>
</header>
}