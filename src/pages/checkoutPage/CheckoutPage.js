import React from "react";
import CheckoutCartCard from "../../components/checkoutCartCard/CheckoutCartCard";
import CheckoutCart from "../../components/checkoutCart/CheckoutCart";
const CheckoutPage = ({ cart, setCart, game }) => {
  return (
    <div>
      <CheckoutCart cart={cart} />
    </div>
  );
};

export default CheckoutPage;
