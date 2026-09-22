import { NavLink } from "react-router-dom"
import { Heart } from "lucide-react"
export default function NavBar({isIcon,setIsIcon}){
    return <nav className="nav-bar">
        <ul className={isIcon?"ul-list":"ul-open-list"}>
<li className="li"><NavLink onClick={()=>setIsIcon(true)}  to="/"  className="link">Home</NavLink></li>
<li className="li"><NavLink onClick={()=>setIsIcon(true)} to="/about" className="link">About</NavLink></li>
<li className="li"><NavLink onClick={()=>setIsIcon(true)} to="/hotels" className="link">Hotels</NavLink></li>
<li className="li"><NavLink onClick={()=>setIsIcon(true)} to="/destinations" className="link">Destinations</NavLink></li>
<li className="li"><NavLink onClick={()=>setIsIcon(true)} to="/favorites" className="link-favorite"><Heart size={20}/> <span>favorites</span></NavLink></li>
        </ul>
    </nav>
}