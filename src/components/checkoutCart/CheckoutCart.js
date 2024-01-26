import React from "react";
import CheckoutCartCard from "../checkoutCartCard/CheckoutCartCard";
import GameCard from "../gameCard/GameCard";

const CheckoutCart = ({ cart, setCart, game }) => {
  return (
    <div className="checkoutWrapper">
      <div className="COinnerContainer">
        {cart.map((game, index) => (
          <CheckoutCartCard game={game} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutCart;
