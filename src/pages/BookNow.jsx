import { useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
import { useState } from "react"
import BookingCheck from "../components/BookingCheck"
import PaymentMethod from "../components/PaymentMethod"
import ScrollToTop from "../components/ScrollToTop"
export default function BookNow(){
    const {hotelid}=useParams()

     const todayDate=new Date().toISOString().split("T")[0]
     const tomorow=new Date()
     tomorow.setDate(tomorow.getDate()+1)
     const tomorrowDate=tomorow.toISOString().split("T")[0]
    const hotelDetails=hotels.find((item)=>item.id===Number(hotelid))

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
    const [room,setRoom]=useState(hotelDetails.roomTypes[0])
    const [checkInDate,setCheckInDate]=useState(todayDate)
    const [checkOutDate,setCheckOutDate]=useState(tomorrowDate)
   
       
    return <div className="container mx-auto w-full box-border bg-slate-50 border border-slate-200 shadow-sm ">
        <button></button>
        <ScrollToTop/>

        <BookingCheck hotelDetails={hotelDetails} checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} />
        <BookingForm number={number} room={room} setRoom={setRoom} setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail} />
        <PaymentMethod/>
    </div>
}