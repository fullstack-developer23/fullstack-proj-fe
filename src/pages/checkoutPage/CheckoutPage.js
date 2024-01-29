import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
const CheckoutPage = ({ cart, quantity }) => {
  return (
    <div>
      <CheckoutCart cart={cart} quantity={quantity} />
    </div>
  );
};

export default CheckoutPage;
