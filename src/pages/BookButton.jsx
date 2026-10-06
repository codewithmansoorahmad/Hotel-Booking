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
  CheckOutRef,
  nameRef,
  emailRef,
  phoneRef,
  paymentRef
}) {
    function getBooking(){
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

    }
  return <div className="w-full 400:flex justify-end px-5 py-2">
<button className="bg-slate-700 text-white px-5 py-2 rounded-md  cursor-pointer w-full hover:bg-slate-800 400:w-32 "  onClick={getBooking}>Book Now</button>
  </div>;
}
