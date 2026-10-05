import { CircleAlert } from "lucide-react";
import { useState } from "react";

export default function BookingCheck({
  hotelDetails,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  room,
  setRoom
}) {
  const roomTypes = hotelDetails.roomTypes;
  const check = new Date(checkInDate);
  const [error,setError]=useState("")

  return (
    <div className="w-full py-4 px-6 box-border flex flex-col gap-2">
      <h1 className="my-4 text-xl border-b border-b-black">Stay Details</h1>
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-col">
          <label htmlFor="date">Check In:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => {
                setCheckInDate(e.target.value);
                 if(new Date(e.target.value)<=check){
                    setError("Check-in must be today or a future date ")
                    return
                }
                else{
                    setError("")
                }

                 
            }}
            id="date"
            className="border w-full text-1xl my-1 rounded-sm 500:"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date-2">Check Out:</label>
          <input
            type="date"
            id="date-2"
            value={checkOutDate}
            onChange={(e) => {

              setCheckOutDate(e.target.value);

                if(new Date(e.target.value)<=check){
                    setError("CheckOut Date Must be after CheckIn ")
                    return
                }
                else{
                    setError("")
                }
            }}
            className="border w-full text-1xl my-1 rounded-sm"
          />
        </div>
        {
            error?<h1 className="flex gap-1 text-red-600 animate-bounce"><span><CircleAlert/></span>{error}</h1>:null
        }
      </div>
      <div>

        <label htmlFor="select">Room Type</label>
        <select
          id="select"
          value={room}
          onChange={(e)=>setRoom(e.target.value)}
          className=" my-1 cursor-pointer border text-[16px] flex items-center w-full  rounded-md px-2 py-2"
        >
          {roomTypes.map((item, index) => {
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
