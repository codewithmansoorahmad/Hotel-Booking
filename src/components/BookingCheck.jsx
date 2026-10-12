import { CircleAlert } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";

export default function BookingCheck({
  hotelDetails,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  room,
  setRoom,
  roomRef,
  checkInRef,
  checkOutRef,
  todayDate
}) {
  const roomTypes = hotelDetails?.roomTypes;
  const check = new Date(checkInDate);
  const out = new Date(checkOutDate);
  const [error,setError]=useState("");
  const ref=useRef()
  console.log(roomTypes)
  console.log(checkInDate)
  console.log(checkOutDate)
  console.log(todayDate)
  
console.log(new Date(checkInDate)<new Date(checkOutDate))
  return (
    <div className="w-full py-4 px-6 box-border flex flex-col gap-2">
      <h1 className="my-4 text-xl border-b border-b-black">Stay Details</h1>
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-col">
          <label htmlFor="date">Check In:</label>

          <input

            type="date"
            ref={checkInRef}
            value={checkInDate}
            min={todayDate}
            onChange={(e) => {
                setCheckInDate(e.target.value);
                 if(new Date(e.target.value)>=new Date(checkOutDate)){
                    setError("Check-in must be before checOut ")
                }
                else{
                    setError("")
                }

                 
            }}
            id="date"
            className="border w-full text-1xl my-1 cursor-pointer rounded-sm 500:"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date-2">Check Out:</label>
          <input
            type="date"
            id="date-2"
            required
min={checkInDate}
            value={checkOutDate}
            ref={checkOutRef}

            onChange={(e) => {


              setCheckOutDate(e.target.value);
  if(new Date(e.target.value)>=new Date(checkInDate)){
                    setError("")
                }
                else{
                    setError("")
                }

               
            }}
            className="border w-full text-1xl my-1 cursor-pointer rounded-sm"
          />
        </div>
        {
            error?<h1 className="flex gap-1 text-red-600 animate-pulse"><span><CircleAlert/></span>{error}</h1>:null
        }
      </div>
      <div>

        <label htmlFor="select">Room Type</label>
        <select
          id="select"
          value={room}
          ref={roomRef}

          onChange={(e)=>setRoom(e.target.value)}
          className=" my-1 cursor-pointer border text-[16px] flex items-center w-full  rounded-md px-2 py-2"
        >
          {roomTypes?.map((item, index) => {
            return (
              <option
                key={index}
                value={item.name}
                className="cursor-pointer text-[14px] flex gap-2"
              >
                {item.name} {item.price}PKR
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
