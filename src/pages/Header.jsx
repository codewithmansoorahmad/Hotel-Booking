import {  House, Menu, X } from "lucide-react"
import NavBar from "../components/NavBar"

import "../css/Header.css"
import { useState } from "react"
import { Outlet } from "react-router-dom"
export default function Header(){
    const [isIcon,setIsIcon]=useState(true)
return <>
 <header className="Header">
    <div className="logo">
        <House size={30} strokeWidth={1}/>
        <span className="project-name">StayFinder</span>
    </div>
<NavBar isIcon={isIcon} setIsIcon={setIsIcon} />

<div className="menu">
    <button className="menu-open" onClick={()=>setIsIcon(!isIcon)}>{isIcon?<Menu />:<X/>}</button>
    </div>

</header>
    <Outlet/>

</>
}