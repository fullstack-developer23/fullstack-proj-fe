import React from "react";
import CheckoutCartCard from "../checkoutCartCard/CheckoutCartCard";

const CheckoutCart = ({ cart, quantity, games, i }) => {
  return (
    <div className="checkoutWrapper">
      <div className="COinnerContainer">
        {cart.length === 5 ? (
          <p>You have a full cart</p>
        ) : (
          <p>{cart.length} GAMES ADDED | You still have space for more</p>
        )}
        <div>
          {cart.map((game, index) => (
            <CheckoutCartCard game={game} key={game.gameId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
