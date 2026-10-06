import { useNavigate, useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
import { useState } from "react"
import BookingCheck from "../components/BookingCheck"
import PaymentMethod from "../components/PaymentMethod"
import ScrollToTop from "../components/ScrollToTop"
import BookingSummary from "../components/BookingSummary"
import { ArrowLeft } from "lucide-react"
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
    const [room,setRoom]=useState(hotelDetails.roomTypes[0].name)
    const [checkInDate,setCheckInDate]=useState(todayDate)
    const [checkOutDate,setCheckOutDate]=useState(tomorrowDate)
    const [paymentMethod,setPaymentMethod]=useState("")
   const navigate=useNavigate()
       
    return <div className="container mx-auto w-full box-border bg-slate-50 border border-slate-200 shadow-sm ">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-1 mx-4 m2-1 cursor-pointer bg-white w-30 h-9 rounded-md justify-center"><span><ArrowLeft/></span>back </button>
        <ScrollToTop/>
        <div className="flex gap-1 justify-center items-center mt-1 flex-col">
        <h1>Book Your Stay</h1>
        <h2>Complete Your Booking</h2>
        </div>
<div className="flex " >

        <BookingCheck hotelDetails={hotelDetails} checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} name={name} room={room} setRoom={setRoom} />
<div>
        <BookingForm number={number}  setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail}  />
        <PaymentMethod paymentMethod={PaymentMethod} setPaymentMethod={setPaymentMethod}/>
        </div>
</div>
   
    </div>
}