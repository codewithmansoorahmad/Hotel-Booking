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
  return <div>
<button className="bg-slate-700 text-white px-3 py-2 " onClick={getBooking}>Book</button>
  </div>;
}
