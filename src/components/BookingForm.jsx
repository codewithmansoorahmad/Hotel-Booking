export default function BookingForm({number,setNumber,email,setEmail,name,setName}){

    return <div className="border-2 w-60 px-6 py-4  ">
        <h1 >Guest Information</h1>
        <div className="flex flex-col ">

        <label htmlFor="name">Full Name</label>
<input type="text" placeholder="Guest Name"  id="name" className="input" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <label htmlFor="email">Email</label>
<input type="email" placeholder="Email" className="input"  id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <label htmlFor="number" >Phone</label>
<input type="number" placeholder="phone" minLength={10} id="number" className="input" value={number} onChange={(e)=>setNumber(e.target.value)} required/>
        <label htmlFor="email">Special Request</label>
<textarea type="text" placeholder="Special Request" className="border rounded-xs my-1 px-3"  id="request"/>
    </div>
        </div>

}