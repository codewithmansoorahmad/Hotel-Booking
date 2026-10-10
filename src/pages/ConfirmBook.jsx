import { useSelector } from "react-redux";
import BookingSummary from "../components/BookingSummary";
import GuestInfo from "../components/BookGuestInfo";
import PriceSummary from "../components/PriceSummary";
import BookingButtons from "../components/BookingButtons";

export default function ConfirmBook(){

const data=useSelector((state)=>state.favorite.book)
console.log(data)
    return <div className="container my-3 mx-auto w-[calc(100%-16px)] sm:w-full box-border  border border-slate-200 shadow-sm px-4 pt-2  ">
        <div>
         <h1 className="text-xl text-slate-950 font-bold">Review Your Booking</h1>
        <p className="text-gray-700 text-[12px]">Please check your details before confirming your reservation.</p>
        </div>
        <div className="md:flex md:p-2 md:gap-3">
        <div className=" md:w-1/2 md:border-2 md:border-gray-200 md:p-2">
        <BookingSummary data={data} />
        <GuestInfo data={data}/>
        </div>
        <div className="md:w-1/2 md:border-2 md:border-gray-200 md:p-2 ">

        <PriceSummary data={data}/>
        <BookingButtons/>
        </div>
        </div>
        
    </div>
}