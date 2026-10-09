import { useNavigate, useParams } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import { hotels } from "../JS service/AllHotelsCode"
import { useRef, useState } from "react"
import BookingCheck from "../components/BookingCheck"
import PaymentMethod from "../components/PaymentMethod"
import ScrollToTop from "../components/ScrollToTop"
import BookingSummary from "../components/BookingSummary"
import { ArrowLeft } from "lucide-react"
import BookBtn from "./BookButton"
import ConfirmBook from "./ConfirmBook"
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
    const [paymentMethod,setPaymentMethod]=useState("");
    const [specailReq,setSpecailReq]=useState("");
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()
    const checkInRef=useRef()
    const checkOutRef=useRef()
    const paymentRef=useRef()
    const reqRef=useRef()
    const roomRef=useRef()
    const [isBook,setIsBook]=useState(false)

   const navigate=useNavigate()
       
    return <div className="container  mx-auto w-full box-border bg-slate-50 border border-slate-200 shadow-sm sm:w-3/4 lg:1/2  ">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-1 mx-4 my-2 cursor-pointer  bg-gray-100 w-30 h-9 rounded-md justify-center"><span><ArrowLeft/></span>back </button>
        <ScrollToTop/>
        <div className="flex gap-1 justify-center items-center mt-1 flex-col">
        <h1>Book Your Stay</h1>
        <h2>Complete Your Booking</h2>
        </div>

        <BookingCheck hotelDetails={hotelDetails} checkOutRef={checkOutRef} checkInRef={checkInRef} checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} todayDate={todayDate} name={name} room={room} setRoom={setRoom} roomRef={roomRef}  />
        <BookingForm nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} reqRef={reqRef} number={number} specailReq={specailReq} setSpecailReq={setSpecailReq}  setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail}  />
        <PaymentMethod paymentMethod={paymentMethod} paymentRef={paymentRef} setPaymentMethod={setPaymentMethod}/>
<BookBtn nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} reqRef={reqRef} number={number} hotelDetails={hotelDetails} checkOutRef={checkOutRef} checkInRef={checkInRef}  checkInDate={checkInDate} paymentRef={paymentRef} checkOutDate={checkOutDate} roomRef={roomRef} paymentMethod={paymentMethod} name={name} email={email} room={room} specailReq={specailReq} setIsBook={setIsBook} />

    </div>
}