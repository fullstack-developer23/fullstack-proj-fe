import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
import "./CheckoutPage.css";
const CheckoutPage = ({
  cart,
  quantity,
  games,
  totalPrice,
  setHasOrdered,
  hasOrdered,
  setCart,
}) => {
  return (
    <div className="checkout-page page-sizing">
      <div>
        <CheckoutCart
          cart={cart}
          setCart={setCart}
          quantity={quantity}
          hasOrdered={hasOrdered}
          setHasOrdered={setHasOrdered}
        />
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
