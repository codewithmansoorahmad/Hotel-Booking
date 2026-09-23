import { Heart, Hotel, MapPin } from "lucide-react";

export default function AboutStay(){
    return <div className="about-stay">
        <h1>Your stay made simple</h1>
        <div className="stays-grid">
            <div className="about-hotels">
                <Hotel/>
                <h2>Find Hotels</h2>
                <p>Browse Hotels for your next trip</p>
            </div>
            <div className="about-destiantion">
                <MapPin/>
                <h2>Discover Places</h2>
                <p>Explain popular destination across pakistan</p>
            </div>
            <div className="about-favorite">
                <Heart/>
                <h2>Save Favorites</h2>
                <p>Keep your favorite stays in one Place</p>
            </div>
            
        </div>

    </div>
}