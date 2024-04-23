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
import { CircularProgress } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedSortFilterValue, setSelectedSortFilterValue] = useState("");
  const [selectedPriceFilterValue, setSelectedPriceFilterValue] = useState("");
  const [selectedCategoryFilterValue, setSelectedCategoryFilterValue] =
    useState("");

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

  // useEffect(() => {
  //   let filtered = [...products];

  //   if (selectedCategoryFilterValue) {
  //     filtered = filteredProducts.filter((product) =>
  //       product.category.includes(selectedCategoryFilterValue),
  //     );
  //   }

  //   setFilteredProducts(filtered);
  // }, [
  //   selectedSortFilterValue,
  //   selectedPriceFilterValue,
  //   selectedCategoryFilterValue,
  // ]);

  const handleSortFilterChange = (event: any) => {
    setSelectedSortFilterValue(event.target.value);
  };

  const handlePriceFilterChange = (event: any) => {
    setSelectedPriceFilterValue(event.target.value);
  };

  const handleCategoryFilterChange = (event: any) => {
    setSelectedCategoryFilterValue(event.target.value);
  };

  if(!products){
    return <CircularProgress color="inherit" />;
  }

  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-12 flex gap-x-6">
        <SelectInput
          label="Sort"
          values={sortFilterValues}
          selectedFilterValue={selectedSortFilterValue}
          onChange={handleSortFilterChange}
        />
        <SelectInput
          label="Price"
          values={priceFilterValues}
          selectedFilterValue={selectedPriceFilterValue}
          onChange={handlePriceFilterChange}
        />
        <SelectInput
          label="Category"
          values={categoryFilterValues}
          selectedFilterValue={selectedCategoryFilterValue}
          onChange={handleCategoryFilterChange}
        />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {/* {products.length === 0 ? (
          <ProductCard products={products} />
        ) : (
          <p className="text-lg">No items found</p>
        )} */}
        <ProductCard products={products} />
      </section>
    </div>
  );
};

export default Products;
