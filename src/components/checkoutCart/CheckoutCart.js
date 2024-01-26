import React from "react";
import CheckoutCartCard from "../checkoutCartCard/CheckoutCartCard";

const CheckoutCart = ({ cart }) => {
  return (
    <div className="checkoutWrapper">
      <div className="COinnerContainer">
        {cart.map((game, index) => (
          <CheckoutCartCard game={game} key={game.gameId} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutCart;
