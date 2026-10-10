export default function BookingButtons(){

    return <div className=" w-full py-2  px-2  my-2 flex flex-col gap-2" >
        <button className="w-full rounded text-white cursor-pointer h-10 bg-green-800 hover:bg-green-700">Confirm Booking</button>
        <button className="w-full border-gray-200 cursor-pointer border-2 h-10 font-semibold rounded">Edit Booking</button>
        <button className="w-full border-gray-200 text-red-500 cursor-pointer font-semibold hover:text-red-600  border-2 h-10 ">Cancel</button>
    </div>
}