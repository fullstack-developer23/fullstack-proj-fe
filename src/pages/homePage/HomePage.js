import React from "react";
import "./HomePage.css";
import GameContainer from "../../components/gameContainer/GameContainer";

const HomePage = ({ games, cart, setCart }) => {
  return (
    <div className="homePageWrapper">
      <GameContainer games={games} cart={cart} setCart={setCart} />
    </div>
  );
};

export default HomePage;
