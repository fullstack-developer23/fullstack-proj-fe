import React from "react";
import "./CheckoutCartCard.css";

const CheckoutCartCard = ({ cart, setCart, game }) => {
  const handleClick = (e, game) => {
    setCart([...cart, game]);
    console.log(cart);
  };
  return (
    <div className="CheckoutCartCard">
      <img
        className="checkout-card-img"
        src={game.gameImage}
        alt="a videogame"
      ></img>
      <p className="game-title">{game.gameName}</p>
      <p className="price">Price: {game.price}</p>

      <div>
        <button
          onClick={(e) => handleClick(e, game)}
          className="remove-btn"
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartCard;
