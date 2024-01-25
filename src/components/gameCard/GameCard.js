import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  const handleClick = (e, game) => {
    console.log("Testing GameCard", game.id);
  };

  return (
    <div className="GameCard" onClick={(e) => handleClick(e, game)}>
      <div className="gameCard-img-container">
        <img className="gameCard-img" src={game.gameImage} alt="a videogame" />
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
