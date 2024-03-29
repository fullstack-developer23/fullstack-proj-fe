import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
import "./CheckoutPage.css";
import { addOrder } from "../../utils/fetch";
const CheckoutPage = ({
  setCart,
  cart,
  quantity,
  games,
  totalPrice,
  setHasOrdered,
  hasOrdered,
  setLoggedIn,
  loggedIn,
}) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const data = await addOrder(totalPrice, loggedIn.id);

    setHasOrdered(!hasOrdered);
    setCart([]);
    const temp = loggedIn;
    temp.Orders.push(data.order);
    setLoggedIn(temp);
  };
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
          <button className="payButton" onClick={(e) => handleClick(e)}>
            Pay And Play!
          </button>
        ) : (
          <h3>Thanks for shopping</h3>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
