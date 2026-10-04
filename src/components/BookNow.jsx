import { useParams } from "react-router-dom"

export default function BookNow(){
    const {hotelid}=useParams()
    console.log(hotelid)
    return <div className="book-now">
<h1>Book Bow </h1>
    </div>
}