import { useRef } from "react";

export default function BookingForm({
  number,
  setNumber,
  email,
  setEmail,
  name,
  setName,
  specailReq,
  setSpecailReq,
  nameRef,
  phoneRef,
  emailRef,
  reqRef
}) {
 
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
       onKeyDown={(e)=>{
       
        if(e.key==="Enter"){
           if(name.trim()===""){
          nameRef.current.reportValidity()
          return
        }
          emailRef.current.focus()
        }

       }}
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
             onKeyDown={(e)=>{
       
        if(e.key==="Enter"){
           if(email.trim()===""){
          emailRef.current.reportValidity()
          return
        }
          phoneRef.current.focus()
        }

       }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="number">Phone</label>
        <input
          type="tel"
          placeholder="03XXXXXXXXX"
          minLength={11}
          id="number"
          className="input"
          value={number}
          ref={phoneRef}
               onKeyDown={(e)=>{
        if(e.key==="Enter"){
           if(number.trim()===""){
          phoneRef.current.reportValidity()
          return
        }
          reqRef.current.focus()
        }

       }}
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

          ref={reqRef}
        />
      </div>
    </div>
  );
}
