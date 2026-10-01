import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
    let [isNext,setIsNext]=useState(false)
    let [isPrev,setIsPrev]=useState(start>0?false:true)
let resultCount=[]
console.log(start>=allHotels.length)
function getNext(){

    let next=start+9
    if(next>=allHotels.length){
 
    setIsNext(true)
return
    }
    setIsPrev(false)
     setStart(prev=>prev+9)
    setEnd(prev=>prev+9)

}
function getPrevious(){

    let previous=start-9
    if(previous<0){
    //     console.log(start)
    //     setStart(0)
    // setEnd(9)
    setIsPrev(true)
return
    }
     setStart(prev=>prev-9)
    setEnd(prev=>prev-9)

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