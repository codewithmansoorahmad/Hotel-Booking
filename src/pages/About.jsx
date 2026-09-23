import AboutHero from "../components/AboutHero"
import AboutPakistan from "../components/AboutPakistan"
import AboutStay from "../components/AboutStay"
import '../css/About.css'
export default function About(){
   return <div className="about">
       <AboutHero/>
       <AboutStay/>
       <AboutPakistan/>
    </div>
}