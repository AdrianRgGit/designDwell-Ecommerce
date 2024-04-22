import { Heart, Plus } from "lucide-react";

const ProductCard = () => {
  return (
    <article className="transform border-b transition-transform duration-300 hover:scale-105">
      <a href="#">
        <img
          src="/images/imagesTestProducts/imgTest1.webp"
          alt="Product Image"
          width={350}
          height={400}
        />

        <div className="mb-2 text-lg">
          <p>Stool</p>
          <p>Category</p>
          <p className="font-inter text-xl font-bold">49.99€</p>
        </div>

        <div className="mb-2 flex items-center gap-x-6">
          <Plus size={32} />
          <Heart size={32} />
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
