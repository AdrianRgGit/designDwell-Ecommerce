import { Heart, Plus } from "lucide-react";
import { FC, useState } from "react";
import { ProductCardProps, ProductType } from "../../../types/productType";

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {products.map((product: ProductType) => (
        <article
          key={product.id}
          className="transform border-b transition-transform duration-300 hover:scale-105"
        >
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
            <Plus
              size={32}
              className="absolute -top-1 left-0 z-10 cursor-pointer"
            />

            {isFavorite ? (
              <Heart
                onClick={() => handleFavorite}
                size={32}
                fill="red"
                className="absolute -top-1 left-10 z-10 cursor-pointer"
              />
            ) : (
              <Heart
                onClick={() => handleFavorite}
                size={32}
                className="absolute -top-1 left-10 z-10 cursor-pointer"
              />
            )}
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
