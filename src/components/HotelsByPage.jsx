import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
    let [isNext,setIsNext]=useState(false)
    let [isPrev,setIsPrev]=useState(true)
    let [number,setNumber]=useState(1)
let resultCount=[]
console.log(start,end)
function getNext(){
    setNumber(number+1)
     setStart(start + 9)
    setEnd(end + 9)
    const next=start + 9

    console.log(next)
    console.log(start,end)
    setIsPrev(false)

   
    if(next>=allHotels.length){
        console.log("No More Next")
        setIsNext(true)
        return
    }
    
}
function getPrevious(){
    let previous=start-9
    setEnd(end-9)
    setStart(start-9)
    console.log(previous)
    console.log(start,end)
    setIsNext(false)

    if(previous<=0){
        console.log("NO MOre Previous")
        setIsPrev(true)
        return
    }
    
}

   
    for(let i=1;i<=countRound;i++){
        resultCount.push(i)
    }
    return <div className="hotels-by-page"  >
<button  className={isPrev?"btn block":"btn"} onClick={getPrevious} disabled={isPrev}><span ><ArrowLeft/></span> Previous</button>
<div className="count">
{
    resultCount.map((item)=> <button id={number}  className={number!==item?"page":"page num" } key={item}>{item}</button> )

}
</div>
<button onClick={getNext} disabled={isNext}  className={isNext?"btn block":"btn"}>Next <span ><ArrowRight/></span> </button>
    </div>
}