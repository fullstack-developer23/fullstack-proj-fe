import "./HomePage.css";
import GameContainer from "../../components/gameContainer/GameContainer";
import LogOrSign from "../../components/logOrSign/LogOrSign";

const HomePage = ({
  games,
  cart,
  setCart,
  setLoggedIn,
  loggedIn,
  setQuantity,
  totalPrice,
  setTotalPrice,
}) => {
  return (
    <div className="homePageWrapper page-sizing">
      {!loggedIn ? (
        <LogOrSign setLoggedIn={setLoggedIn} />
      ) : (
        <GameContainer
          games={games}
          cart={cart}
          setCart={setCart}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      )}
    </div>
  );
};

export default HomePage;
