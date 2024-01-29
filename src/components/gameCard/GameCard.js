import React from "react";
import "./GameCard.css";

const GameCard = ({ cart, setCart, game }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (cart.length === 5) {
      return;
    }

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].gameName === game.gameName) {
        return;
      }
    }
    setCart([...cart, game]);
  };

  return (
    <div className="GameCard" onClick={(e) => handleClick(e, game)}>
      <div className="gameCard-img-container">
        <img className="gameCard-img" src={game.gameImage} alt="a video-game" />
      </div>
      <div className="gameDataContainer">
        <p>{game.gameName}</p>
        <p>Meta-Critic Rating: {game.gameRating}</p>
        <p>Price: £49.99</p>
        <button className="buyButton" type="button" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
