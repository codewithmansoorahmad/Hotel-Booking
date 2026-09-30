import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
    let [isTrue,setIsTrue]=useState(false)
let resultCount=[]
console.log(start>=allHotels.length)
function getNext(){

    let next=start+9
    if(next>=allHotels.length){
    //     console.log(start)
    //     setStart(0)
    // setEnd(9)
    setIsTrue(true)
return
    }
     setStart(prev=>prev+9)
    setEnd(prev=>prev+9)


    
   
}
   
    for(let i=1;i<=countRound;i++){
        resultCount.push(i)
    }
    return <div className="hotels-by-page"  >
<button className={isTrue?"Block":"btn"}><span ><ArrowLeft/></span> Previous</button>
<div className="count">
{
    resultCount.map((item)=> <button  className="page" key={item}>{item}</button> )

}
</div>
<button onClick={getNext} disabled={isTrue} className={isTrue?"Block":"btn"}>Next <span ><ArrowRight/></span> </button>
    </div>
}