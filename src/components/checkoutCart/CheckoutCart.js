import React from "react";
import CheckoutCartCard from "../checkoutCartCard/CheckoutCartCard";
import "./CheckoutCart.css";

const CheckoutCart = ({ cart, setCart, quantity, games }) => {
  return (
    <div className="checkoutWrapper">
      <div className="co-innerContainer">
        <div className="message">
          {cart.length === 5 ? (
            <p>You have a full cart</p>
          ) : (
            <p>GAMES ADDED: {cart.length} | You still have space for more</p>
          )}
        </div>
        <div>
          {cart.map((game, index) => (
            <CheckoutCartCard
              game={game}
              key={game.gameId}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
