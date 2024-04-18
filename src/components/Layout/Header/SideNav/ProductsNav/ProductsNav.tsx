import { FC } from "react";
import { MainNavProps } from "../../../../../types/headerTypes";
import { ArrowLeft } from "lucide-react";

const ProductsNav: FC<MainNavProps> = ({ toggleProductsNav }) => {
  return (
    <>
      <section className="flex flex-col gap-y-2">
        <p className="text-lg">OUR PRODUCTS</p>
        <a
          href="#"
          className="text-left font-bold transition-colors duration-200 hover:text-gold"
        >
          All
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Living room furniture
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Children’s furniture
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Sofas
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Chairs
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Beds
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Dining room furniture
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Furniture sets
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          Outdoor furniture
        </a>
      </section>

      <button
        onClick={toggleProductsNav}
        className="flex items-center gap-x-2 text-left transition-colors duration-200 hover:text-gold"
      >
        <ArrowLeft />
        <span className="mt-1">BACK</span>
      </button>
    </>
  );
};

export default ProductsNav;
