import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
    let [isNext,setIsNext]=useState(false)
    let [isPrev,setIsPrev]=useState(start>0?false:true)
let resultCount=[]
function getNext(){
    const next=start + 9
    if(next>=allHotels.length){
        console.log("No More Next")
        return
    }
    setStart(start + 9)
    setEnd(end + 9)
}

   
    for(let i=1;i<=countRound;i++){
        resultCount.push(i)
    }
    return <div className="hotels-by-page"  >
<button  className={isPrev?"btn block":"btn"} onClick={getPrevious} disabled={isPrev}><span ><ArrowLeft/></span> Previous</button>
<div className="count">
{
    resultCount.map((item)=> <button  className="page" key={item}>{item}</button> )

}
</div>
<button onClick={getNext} disabled={isNext} className={isNext?"btn block":"btn"}>Next <span ><ArrowRight/></span> </button>
    </div>
}