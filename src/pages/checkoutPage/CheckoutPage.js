import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
import "./CheckoutPage.css";
const CheckoutPage = ({
  cart,
  quantity,
  games,
  e,
  totalPrice,
  hasOrdered,
  setHasOrdered,
}) => {
  return (
    <div className="checkout-page page-sizing">
      <div>
        <CheckoutCart cart={cart} quantity={quantity} />
      </div>
      <div>
        <p className="price-added">Total Price: {totalPrice.toFixed(2)}</p>
      </div>
      <div>
        {!hasOrdered ? (
          <button className="payButton">Pay And Play!</button>
        ) : (
          <p>Thanks for shopping</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

// <div className="message">
// {cart.length === 5 ? (
//   <p>You have a full cart</p>
// ) : (
//   <p>{cart.length} GAMES ADDED | You still have space for more</p>
// )}
// </div>
