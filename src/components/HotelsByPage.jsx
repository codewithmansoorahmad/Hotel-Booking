import { ArrowLeft, ArrowRight } from "lucide-react"

export default function HotelsByPage({allHotels}){
    let count=allHotels.length/9
    let countRound=Math.ceil(count)
let resultCount=[]
   
    for(let i=1;i<=countRound;i++){
        resultCount.push(i)
    }

    return <div className="hotels-by-page">
<button><span><ArrowLeft/></span> Previous</button>
<div className="count">
{
    resultCount.map((item)=> <button className="page" key={item}>{item}</button> )

}
</div>
<button>Next <span><ArrowRight/></span> </button>
    </div>
}