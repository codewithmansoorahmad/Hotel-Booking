import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer(){
    <div className="footer">
        <div className="stay-finder">
          
            <h1><Home className="home-icon"/>StayFinder</h1>
            <p>Find comfortable stays and explore destinations across pakistan.</p>
        </div>
        <div className="quickLinks">
            <ul className="links-ul">
                <Link className="link">Home</Link>
                <Link className="link">About</Link>
                <Link className="link">Hotels</Link>
                <Link className="link">Destinations</Link>
                <Link className="link">Favorites</Link>
            </ul>
        </div>
        <div className="footer-footer">
            <p> © 2026 StayFinder</p>
            <p>All rights Reserved</p>
        </div>
    </div>
}