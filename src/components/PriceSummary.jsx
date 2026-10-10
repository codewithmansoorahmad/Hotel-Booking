export default function PriceSummary({data}){
    console.log(data.checkInDate)
    console.log(data.checkOutDate)
    const days=(new Date(data.checkOutDate)-new Date(data.checkInDate)) /(1000*60*60*24)
    let rooms=data.hotelDetails.
roomTypes.find((item)=>data.room ===item.name)
const price=rooms.price*days
    console.log(rooms)
    console.log(days)
    return <div className="w-full py-2 border-2 border-gray-200 px-2 text-[12px] my-2 rounded-lg">
        <h1 className="font-bold text-[14px]">Price Summary</h1>
        <p className="flex justify-between ">Room x {days} nights <span>Rs: {price.toLocaleString()}</span></p>
        <p className="flex justify-between">Extra Charges <span>Rs:0</span></p>
        <p className="mt-4 font-bold flex justify-between  ">Total Amount <span className="text-green-600">Rs {price.toLocaleString()}</span></p>

    </div>
}