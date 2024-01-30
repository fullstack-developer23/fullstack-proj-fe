import React from "react";
import "./GameContainer.css";
import GameCard from "../gameCard/GameCard";

const GameContainer = ({
  games,
  cart,
  setCart,
  setQuantity,
  setTotalPrice,
  totalPrice,
}) => {
  return (
    <div className="game-container-wrapper">
      {games.map((game, index) => (
        <GameCard
          game={game}
          cart={cart}
          setCart={setCart}
          key={game.gameId}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}
    </div>
  );
};

export default GameContainer;
