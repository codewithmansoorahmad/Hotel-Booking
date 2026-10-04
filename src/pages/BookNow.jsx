import { useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
import { useState } from "react"
import BookingCheck from "../components/BookingCheck"
export default function BookNow(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState()
    const {hotelid}=useParams()
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
    console.log(hotelid)
    console.log(hotelDetails)
    return <div className="container mx-auto w-full box-border">
        <button></button>

        <BookingCheck hotelDetails={hotelDetails}/>
        <BookingForm number={number} setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail} />
    </div>
}