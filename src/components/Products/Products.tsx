import {
  categoryFilterValues,
  priceFilterValues,
  sortFilterValues,
} from "../../mocks/selectValues";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-12 flex gap-x-6">
        <SelectInput label="Sort" values={sortFilterValues} />
        <SelectInput label="Price" values={priceFilterValues} />
        <SelectInput label="Category" values={categoryFilterValues} />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
};

export default Products;
