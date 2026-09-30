import { ArrowLeft, ArrowRight } from "lucide-react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
let resultCount=[]
console.log(start>=allHotels.length)
function getNext(){
    let next=start+9
     setStart(prev=>prev+9)
    setEnd(prev=>prev+9)


    if(next>=allHotels.length){
        console.log(start)
        setStart(0)
    setEnd(9)
return
    }
   
}
   
    for(let i=1;i<=countRound;i++){
        resultCount.push(i)
    }
    return <div className="hotels-by-page">
<button><span><ArrowLeft/></span> Previous</button>
<div className="count">
{
    resultCount.map((item)=> <button  className="page" key={item}>{item}</button> )

}
</div>
<button onClick={getNext} >Next <span><ArrowRight/></span> </button>
    </div>
}