export default function BookingCheck({hotelDetails}){
    const roomTypes=hotelDetails.roomTypes
    console.log(roomTypes)
    return <div className="w-full py-4 px-6 box-border flex flex-col gap-2">
        <h1 className="my-4">Stay Details</h1>

        <div className="flex flex-col gap-1 ">
            <div className="flex flex-col">

            <label htmlFor="date" >Check In:</label>
            <input type="date"  id="date" className="border w-full text-1xl my-1 rounded-sm 500:" />
            </div>
<div className="flex flex-col">
            <label htmlFor="date-2" >Check Out:</label>
            <input type="date" id="date-2" className="border w-full text-1xl my-1 rounded-sm" />
            </div>
        </div>
        <div>
        <label htmlFor="select">Room Type</label>
        <select  id="select" className=" my-1 cursor-pointer border text-[16px] flex items-center w-full  rounded-md px-2 py-2">
            {
                roomTypes.map((item,index)=>{
                    return <option key={index} value={item.name} className="cursor-pointer text-[14px] flex gap-2" >{item.name}   {item.price}PKR</option>
                })
            }
        </select>
        </div>
    </div>
}