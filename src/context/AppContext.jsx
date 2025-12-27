import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load stored favorites
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites"));
    if (saved) setFavorites(saved);
  }, []);

  // Save favorites whenever changed
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (snippet) => {
    if (favorites.find((f) => f._id === snippet._id)) return;
    setFavorites((prev) => [...prev, snippet]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f._id !== id));
  };

  return (
    <AppContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
