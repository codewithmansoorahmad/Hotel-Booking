export default function PaymentMethod({  setPaymentMethod,paymentRef
}) {
  return (
    <div className="w-full px-6 py-4">
      <h1 className="my-4 text-xl border-b border-b-black">Payment Method </h1>
      <div className="flex gap-2 flex-col">
<div className="border-2 border-slate-200 rounded-md py-6 px-3 flex gap-2 items-center">
      <input type="radio" id="cash" name="payment" value="cash" onChange={(e)=>{setPaymentMethod(e.target.value)}} ref={paymentRef} required />
      <label htmlFor="cash"> Cash On Delivery</label>
      </div>
      <div className="border-2 rounded-md flex gap-2 items-center border-slate-200 py-6 px-3">
      <input type="radio" name="payment" id="online" value="online"  onChange={(e)=>{setPaymentMethod(e.target.value)}} required/>
      <label htmlFor="online">Online Payment With EasyPaisa </label>
    </div>
    </div>
    </div>
  );
}
