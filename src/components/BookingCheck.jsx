export default function BookingCheck({hotelDetails}){
    
    return <div>
        <h1>Stay Details</h1>

        <div>
            <label htmlFor="date">Check In</label>
            <input type="date"  id="date" />
            <label htmlFor="date-2">Check Out</label>
            <input type="date" id="date-2" />
        </div>
        
    </div>
}