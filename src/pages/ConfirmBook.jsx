import { useSelector } from "react-redux";
import BookingSummary from "../components/BookingSummary";
import GuestInfo from "../components/BookGuestInfo";
import PriceSummary from "../components/PriceSummary";

export default function ConfirmBook(){

const data=useSelector((state)=>state.favorite.book)
console.log(data)
    return <div className="container mx-auto w-full box-border  border border-slate-200 shadow-sm px-4 ">
        <div>
         <h1 className="text-xl text-slate-950 font-bold">Review Your Booking</h1>
        <p className="text-gray-700 text-[12px]">Please check your details before confirming your reservation.</p>
        </div>

        <BookingSummary data={data} />
        <GuestInfo data={data}/>
        <PriceSummary data={data}/>
    </div>
}