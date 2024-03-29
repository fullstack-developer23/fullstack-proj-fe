import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import HomePage from "./pages/homePage/HomePage";
import UserAccountPage from "./pages/userAccountPage/UserAccountPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hasOrdered, setHasOrdered] = useState(false);

  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
    );

    const data = await response.json();
    const gamesData = data.results.map((game, index) => {
      return {
        gameImage: game.background_image,
        gameId: game.id,
        gameName: game.name,
        gameRating: game.metacritic,
        price: 49.99,
      };
    });
    setGames(gamesData);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="app">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              games={games}
              cart={cart}
              setCart={setCart}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              setQuantity={setQuantity}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              setCart={setCart}
              cart={cart}
              quantity={quantity}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              hasOrdered={hasOrdered}
              setHasOrdered={setHasOrdered}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/youruseraccount"
          element={
            <UserAccountPage
              username={loggedIn.username}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
