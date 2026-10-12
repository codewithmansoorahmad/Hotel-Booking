import { useNavigate } from "react-router-dom"
import { getBookingData } from "../redux/Slice"
import { useDispatch } from "react-redux"

export default function BookBtn({
  isBook,
  setIsBook,
  room,
  name,
  email,
  phone,
  checkInDate,
  checkOutDate,
  paymentMethod,
  specailReq,
  roomRef,
  checkInRef,
  checkOutRef,
  number,
  hotelDetails,

  nameRef,
  emailRef,
  phoneRef,
  paymentRef

}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function getBooking(){
   if (checkInDate >= checkOutDate) {
  checkOutRef.current.setCustomValidity(
    "Check-out must be after check-in"
  );
  checkOutRef.current.reportValidity();
  return;
}

checkOutRef.current.setCustomValidity("");
if(!nameRef.current.checkValidity()){
    nameRef.current.reportValidity()
    return
}
if(!emailRef.current.checkValidity()){
    emailRef.current.reportValidity()
    return
}
if(!phoneRef.current.checkValidity()){
    phoneRef.current.reportValidity()
    return
}
if(!paymentRef.current.checkValidity()){
    paymentRef.current.reportValidity()
}

dispatch(getBookingData({hotelDetails,name,room,email,number,specailReq,checkInDate,checkOutDate,paymentMethod}))
console.log(Object.keys({hotelDetails,name,room,email,number,specailReq,checkInDate,checkOutDate,paymentMethod}))
setIsBook(true)
navigate(`/hotel/${hotelDetails.id}/bookingConfirm`)
    }
  return <div className="w-full 400:flex justify-end px-5 py-2">
<button className="bg-slate-700 text-white px-5 py-2 rounded-md  cursor-pointer w-full hover:bg-slate-800 400:w-32 "  onClick={getBooking}>Book Now</button>
  </div>;
}
