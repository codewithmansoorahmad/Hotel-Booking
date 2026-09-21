import { NavLink } from "react-router-dom"
import { Heart } from "lucide-react"
export default function NavBar(){
    return <nav className="nav-bar">
        <ul>
<li><NavLink className="link">Home</NavLink></li>
<li><NavLink className="link">About</NavLink></li>
<li><NavLink className="link">Hotels</NavLink></li>
<li><NavLink className="link">Destinations</NavLink></li>
<li><NavLink className="link-favorite"><Heart size={20}/> <span>favorites</span></NavLink></li>


        </ul>
    </nav>
}