export default  function GuestInfo({data}){
    return <div className=" flex flex-col gap-1 text-[14px]  w-full py-2 border-2 border-gray-200 px-2 my-2 rounded-lg">
    <h1 className="font-bold mb-2">Guest Information</h1>
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Phone: {data.number}</p>
    <p>payment: {data.paymentMethod}</p>
    {data.specailReq && <p>Special Request: {data.specailReq}</p>}
</div>
}