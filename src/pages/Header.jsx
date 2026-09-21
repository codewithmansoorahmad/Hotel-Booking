import {  House, Menu } from "lucide-react"
import NavBar from "../components/NavBar"

import "../css/Header.css"
export default function Header(){
return <header className="Header">
    <div className="logo">
        <House size={30} strokeWidth={1}/>
        <span className="project-name">StayFinder</span>
    </div>
<NavBar/>
<>
    <Menu className="menu"/>
    </>
</header>
}