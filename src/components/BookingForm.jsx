import { useRef } from "react";

export default function BookingForm({
  number,
  setNumber,
  email,
  setEmail,
  name,
  setName,
  specailReq,
  setSpecailReq
}) {
  const nameRef=useRef()
  const emailRef=useRef()
  const phoneRef=useRef()
  return (
    <div className=" w-full px-6 py-4  ">
      <h1 className="my-4 text-xl border-b border-b-black">
        Guest Information
      </h1>
      <div className="flex flex-col ">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Guest Name"
          id="name"
          className="input"
          value={name}
          ref={nameRef}
       
          onChange={(e) => {setName(e.target.value)
                if(!e.target.checkValidity()){
                        console.log("wrong")
                }
          }}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          id="email"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="number">Phone</label>
        <input
          type="number"
          placeholder="phone"
          minLength={10}
          id="number"
          className="input"
          value={number}
          min={2}
          onChange={(e) => {setNumber(e.target.value)
                 if(!e.target.checkValidity()){
                        console.log("wrong")
                }
          }}
          required
        />
        <label htmlFor="email">Special Request</label>
        <textarea

          type="text"
          value={specailReq}
          onChange={(e)=>{setSpecailReq(e.target.value)}}
          placeholder="Special Request"
          className="border rounded-xs my-1 px-3"
          id="request"
        />
      </div>
    </div>
  );
}
