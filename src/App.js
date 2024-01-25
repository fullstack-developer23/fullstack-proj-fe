import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import HomePage from "./pages/homePage/HomePage";
import UserAccountPage from "./pages/userAccountPage/UserAccountPage";
import Header from "./components/header/Header";

function App() {
  const [games, setGames] = useState([]);
  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
    );

    const data = await response.json();
    console.log(data);
    const gamesData = data.results.map((game, index) => {
      return {
        gameImage: game.background_image,
        gameId: game.id,
        gameName: game.name,
        gameReview: game.ratings,
        gameRating: game.metacritic,
      };
    });
    console.log(gamesData);
    setGames(gamesData);
  };
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage games={games} />} />

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/youruseraccount" element={<UserAccountPage />} />
      </Routes>
    </>
  );
}

export default App;
