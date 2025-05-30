import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponentHome from "./components/MainComponentHome";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponentHome />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
