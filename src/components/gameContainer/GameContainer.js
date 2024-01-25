import React from "react";
import "./GameContainer.css";
import GameCard from "../gameCard/GameCard";

const GameContainer = ({ games }) => {
  console.log(games);
  // const games1 = games.splice(10);
  return (
    <div className="game-container-wrapper">
      {games.map((game, index) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GameContainer;