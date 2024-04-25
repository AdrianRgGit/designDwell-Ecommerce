import { Heart, Plus } from "lucide-react";
import { FC } from "react";
import { ProductCardProps, ProductType } from "../../../types/productType";

const ProductCard: FC<ProductCardProps> = ({ products }) => {
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

            <div className="mb-2 flex items-center gap-x-6">
              <Plus size={32} />
              <Heart size={32} />
            </div>
          </a>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
