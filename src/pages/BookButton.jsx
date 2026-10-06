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
    // nameRef.current.setCustomValidity("Enter Full Name")
    nameRef.current.reportValidity()
}
if(!emailRef.current.checkValidity()){
    // emailRef.current.setCustomValidity("Enter Your Gmail Id")
    emailRef.current.reportValidity()
}
if(!phoneRef.current.checkValidity()){
    // phoneRef.current.setCustomValidity("Enter valid Phone Number ")
    phoneRef.current.reportValidity()
}
if(!paymentRef.current.checkValidity()){
    // paymentRef.current.setCustomValidity("Selcct One Payment method ")
    paymentRef.current.reportValidity()
}
    // paymentRef.current.setCustomValidity("")
    // emailRef.current.setCustomValidity("")
    // nameRef.current.setCustomValidity("")

    // phoneRef.current.setCustomValidity(" ")


    }
  return <div>
<button className="bg-slate-700 text-white px-3 py-2 " onClick={getBooking}>Book</button>
  </div>;
}
