import {  House } from "lucide-react"
import NavBar from "../components/NavBar"

import "../css/Header.css"
export default function HomePage(){
return <header className="Header">
    <div className="logo">
        <House size={30} strokeWidth={1}/>
        <span>StayFinder</span>
    </div>
<NavBar/>
</header>
}