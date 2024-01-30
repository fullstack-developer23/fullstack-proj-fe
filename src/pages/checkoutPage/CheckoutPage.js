import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
import "./CheckoutPage.css";
const CheckoutPage = ({ cart, quantity, games, e, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div>
        <CheckoutCart cart={cart} quantity={quantity} />
      </div>
      <div>
        <p className="price-added">Total Price: {totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <button className="payButton">Pay And Play!</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
