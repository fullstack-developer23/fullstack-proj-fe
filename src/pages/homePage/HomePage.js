import React from "react";
import "./HomePage.css";
import GameContainer from "../../components/gameContainer/GameContainer";

const HomePage = ({ games }) => {
  return (
    <div className="homePageWrapper">
      <GameContainer games={games} />
    </div>
  );
};

export default HomePage;
