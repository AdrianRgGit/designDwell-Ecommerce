import { useEffect, useState } from "react";
import {
  categoryFilterValues,
  priceFilterValues,
  sortFilterValues,
} from "../../mocks/selectValues";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import ProductCard from "./ProductCard/ProductCard";
import fetchProducts from "../../services/productService";
import { ProductType } from "../../types/productType";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-12 flex gap-x-6">
        <SelectInput label="Sort" values={sortFilterValues} />
        <SelectInput label="Price" values={priceFilterValues} />
        <SelectInput label="Category" values={categoryFilterValues} />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        <ProductCard products={products} />
      </section>
    </div>
  );
};

export default Products;
