export default function BookingForm(){

    return <div className="border-2 w-60 px-6 py-4  ">
        <h1 >Guest Information</h1>
        <div className="flex flex-col ">

        <label htmlFor="name">Full Name</label>
<input type="text " placeholder="Guest Name"  id="name" className="border  rounded-xs px-3 my-1"/>
        <label htmlFor="email">Email</label>
<input type="email" placeholder="Email" className="border  rounded-xs px-3 my-1  " id="email"/>
        <label htmlFor="number">Phone</label>
<input type="number" placeholder="phone" id="number"className="border my-1 rounded-xs px-3  "/>
        <label htmlFor="email">Special Request</label>
<textarea type="text" placeholder="Special Request" className="border rounded-xs my-1 px-3"  id="request"/>
    </div>
        </div>

}