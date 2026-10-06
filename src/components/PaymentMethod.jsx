export default function PaymentMethod({  setPaymentMethod,paymentRef
}) {
  return (
    <div className="w-full px-6 py-4">
      <h1 className="my-4 text-xl border-b border-b-black">Payment Method </h1>
      <div className="flex gap-2 flex-col lg:grid grid-cols-2" >
<div className="border-2 border-slate-200 rounded-md py-6 px-3 flex gap-2 items-center ">
      <input type="radio" id="cash" name="payment" value="cash" className="cursor-pointer" onChange={(e)=>{setPaymentMethod(e.target.value)}} ref={paymentRef} required />
      <label htmlFor="cash" className="cursor-pointer" > Cash On Delivery</label>
      </div>
      <div className="border-2 rounded-md flex gap-2 items-center border-slate-200 py-6 px-3">
      <input type="radio" name="payment" id="online" value="online"  onChange={(e)=>{setPaymentMethod(e.target.value)}} className="cursor-pointer"/>
      <label htmlFor="online" className="cursor-pointer">Online Payment With EasyPaisa </label>
    </div>
    </div>
    </div>
  );
}
