import { Heart } from "lucide-react";
import { FC, useState } from "react";
import { ProductCardProps, ProductType } from "../../../types/productType";

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);

  const isFavorite = (product: ProductType) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  // NOTE: De momento lo dejo guardado en el localStorage. Lo haré con redux.
  const addToFavorites = (product: ProductType) => {
    if (isFavorite(product)) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const newFavorites = [...favorites, product];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  return (
    <>
      {products.map((product: ProductType) => (
        <article key={product.id} className="border-b">
          <a href={`/products/${product.name}/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              width={350}
              height={400}
              className="h-[400px]"
            />

            <div className="mb-2 text-lg">
              <p>{product.name}</p>
              <p>{product.category.join(", ")}</p>
              <p className="font-inter text-xl font-bold">{`${product.price.toFixed(2)}€`}</p>
            </div>
          </a>
          <div className="relative mb-10">
            <Heart
              onClick={() => addToFavorites(product)}
              size={32}
              fill={isFavorite(product) ? "#FFC94A" : "none"}
              stroke={isFavorite(product) ? "#FFC94A" : "black"}
              className="absolute -top-2 right-5 z-10 cursor-pointer transition-colors duration-150"
            />
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
