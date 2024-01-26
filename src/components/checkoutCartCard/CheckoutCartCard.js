import React from "react";
import "./CheckoutCartCard.css";
import GameCard from "../gameCard/GameCard";

const CheckoutCartCard = ({ cart, setCart, game }) => {
  const handleClick = (e, game) => {
    setCart([...cart, game]);
    console.log(cart);
  };
  return (
    <div className="CheckoutCartCard">
      <img className="checkout-card-img" src={game.gameImage}></img>
      <p className="game-title">{game.gameName}</p>
      <p>Price: {game.price}</p>
      <div onClick={(e) => handleClick(e, game)}>
        <button className="remove-btn" type="button" onClick={handleClick}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartCard;
