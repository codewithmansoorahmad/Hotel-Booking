import { ArrowLeft, ArrowRight } from "lucide-react"

export default function HotelsByPage({allHotels,setStart,end,start,setEnd}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
let resultCount=[]
function getNext(){
    if(start>allHotels.length){
    setEnd(9)
    setStart(0)
return
    }
    setStart(prev=>prev+9)
    setEnd(prev=>prev+9)
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
<button onClick={getNext}>Next <span><ArrowRight/></span> </button>
    </div>
}