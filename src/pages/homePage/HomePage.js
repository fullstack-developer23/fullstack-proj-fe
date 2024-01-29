import "./HomePage.css";
import GameContainer from "../../components/gameContainer/GameContainer";
import LogOrSign from "../../components/logOrSign/LogOrSign";

const HomePage = ({ games, cart, setCart, setLoggedIn, loggedIn }) => {
  return (
    <div className="homePageWrapper">
      {!loggedIn ? (
        <LogOrSign setLoggedIn={setLoggedIn} />
      ) : (
        <GameContainer games={games} cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default HomePage;
