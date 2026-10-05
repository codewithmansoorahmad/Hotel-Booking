import { useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
import { useState } from "react"
import BookingCheck from "../components/BookingCheck"
import PaymentMethod from "../components/PaymentMethod"
export default function BookNow(){
     const todayDate=new Date().toISOString().split("T")[0]
    //  const tomorow=
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState()
    const {hotelid}=useParams()
    const [checkInDate,setCheckInDate]=useState(todayDate)
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))
   
       
    return <div className="container mx-auto w-full box-border bg-slate-50 border border-slate-200 shadow-sm ">
        <button></button>

        <BookingCheck hotelDetails={hotelDetails} checkInDate={checkInDate} setCheckInDate={setCheckInDate} />
        <BookingForm number={number} setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail} />
        <PaymentMethod/>
    </div>
}