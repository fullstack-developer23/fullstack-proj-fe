import React from "react";
import "./GameContainer.css";

const GameContainer = ({ games }) => {
  return (
    <div className="game-container-wrapper">
      <div className="game-container-inner">
        {games.map((game, index) => (
          <GameCard game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
