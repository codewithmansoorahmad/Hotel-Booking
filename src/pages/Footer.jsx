import { House } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css"

export default function Footer(){
   return <div className="footer">
        <div className="stay-finder">
          
            <h1><House className="home-icon" size={30} strokeWidth={1}/>StayFinder</h1>
            <p>Find comfortable stays and explore destinations across pakistan.</p>
        </div>
        <div className="quickNavLinks">
            <ul className="NavLinks-ul">
                <NavLink to="/" className="quick-NavLink">Home</NavLink>
                <NavLink to="/About" className="quick-NavLink">About</NavLink>
                <NavLink to="/Hotels" className="quick-NavLink">Hotels</NavLink>
                <NavLink to="/Destinations" className="quick-NavLink">Destinations</NavLink>
                <NavLink to="/Favorites" className="quick-NavLink">Favorites</NavLink>
            </ul>
        </div>
        <div className="footer-footer">
            <p> © 2026 StayFinder</p>
            <p>All rights Reserved</p>
        </div>
    </div>
}