export default function PaymentMethod() {
  return (
    <div>
      <h1>Payment Method </h1>
      <input type="radio" id="cash" name="payment" />

      <label htmlFor="cash"> Cash On Delivery</label>
      <input type="radio" name="payment" id="online" />
      <label htmlFor="online">Online Payment With EasyPaisa </label>
    </div>
  );
}
