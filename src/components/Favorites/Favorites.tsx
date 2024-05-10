import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard/ProductCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // NOTE: Con el local storage funciona raro, esto se solucionará cuando aplique redux
  const getFavorites = () => {
    const favoritesJSON = localStorage.getItem("favorites");
    if (favoritesJSON) {
      try {
        const favoritesArray = JSON.parse(favoritesJSON);
        setFavorites(favoritesArray);
      } catch (error) {
        console.error("Error al parsear JSON:", error);
        setFavorites([]);
      }
    } else {
      console.log("Favorites not found");
      setFavorites([]);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <section className="mb-12 mt-20 space-y-12 p-8">
      <p>FAVORITES</p>

      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {favorites.length === 0 ? (
          <p className="text-lg">No items found</p>
        ) : (
          <ProductCard products={favorites} />
        )}
      </section>
    </section>
  );
};

export default Favorites;
