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
      <p>Price: {game.price}</p>

      <div onClick={(e) => handleClick(e, game)}>
        <button className="remove-btn" type="button">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartCard;
