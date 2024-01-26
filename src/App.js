import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import HomePage from "./pages/homePage/HomePage";
import UserAccountPage from "./pages/userAccountPage/UserAccountPage";
import Header from "./components/header/Header";

function App() {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);

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
        price: 50000,
      };
    });
    setGames(gamesData);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage games={games} cart={cart} setCart={setCart} />}
        />

        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/youruseraccount" element={<UserAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
