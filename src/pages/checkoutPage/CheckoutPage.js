import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
const CheckoutPage = ({ cart }) => {
  return (
    <div>
      <CheckoutCart cart={cart} />
    </div>
  );
};

export default CheckoutPage;
