import React from "react";
import "./CheckoutCartCard.css";

const CheckoutCartCard = ({ cart, setCart, game }) => {
  const handleClick = (e, cart) => {
    const temp = cart;
    const temp2 = cart.filter((el) => parseInt(e.target.value) !== el.gameId);
    setCart([...temp2]);
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
          onClick={(e) => handleClick(e, cart)}
          className="remove-btn"
          type="button"
          value={game.gameId}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartCard;
