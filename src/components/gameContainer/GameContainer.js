import React from "react";
import "./GameContainer.css";
import GameCard from "../gameCard/GameCard";

const GameContainer = ({ games, cart, setCart }) => {
  return (
    <div className="game-container-wrapper">
      {games.map((game, index) => (
        <GameCard game={game} cart={cart} setCart={setCart} key={game.gameId} />
      ))}
    </div>
  );
};

export default GameContainer;
