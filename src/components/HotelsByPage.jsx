import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd,number,setNumber}){
    
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
    let [isNext,setIsNext]=useState(false)
    let [isPrev,setIsPrev]=useState(true)
let resultCount=[]
console.log(start,end)
function getNext(){
    setNumber(number+1)

    
    const next=number + 1
    setIsPrev(false)   
    if(next===resultCount[resultCount.length-1]){
        console.log("No More Next")
        setIsNext(true)
    }
     setStart(start + 9)
    setEnd(end + 9)
}
function getPrevious(){
    setNumber(number-1)
    let previous=number-1
    setEnd(end-9)
    setStart(start-9)
    console.log(previous)
    console.log(start,end)
    setIsNext(false)

    if(previous===resultCount[0]){
        setIsPrev(true)
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