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

  useEffect(() => {
    let filtered = [...products];

    // NOTE: SORT
    switch (selectedSortFilterValue) {
      case "highToLow":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "lowToHigh":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        filtered = filtered.sort((a, b) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        });
        break;
      case "popular":
        filtered = filtered.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    // NOTE: PRICE
    switch (parseInt(selectedPriceFilterValue)) {
      case 1:
        filtered = filtered.filter((product) => product.price <= 49.99);
        break;
      case 2:
        filtered = filtered.filter(
          (product) => product.price >= 50 && product.price <= 99.99,
        );
        break;
      case 3:
        filtered = filtered.filter(
          (product) => product.price >= 100 && product.price <= 149.99,
        );
        break;
      case 4:
        filtered = filtered.filter(
          (product) => product.price >= 150 && product.price <= 199.99,
        );
        break;
      case 5:
        filtered = filtered.filter((product) => product.price >= 200);
        break;
      default:
        break;
    }

    // NOTE: CATEGORY
    if (selectedCategoryFilterValue) {
      filtered = filtered.filter((product) =>
        product.category.includes(selectedCategoryFilterValue),
      );
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedPriceFilterValue,
    selectedCategoryFilterValue,
    selectedSortFilterValue,
  ]);

  const handleSortFilterChange = (event: any) => {
    setSelectedSortFilterValue(event.target.value);
  };

  const handlePriceFilterChange = (event: any) => {
    setSelectedPriceFilterValue(event.target.value);
  };

  const handleCategoryFilterChange = (event: any) => {
    setSelectedCategoryFilterValue(event.target.value);
  };

  const resetFilters = () => {
    setSelectedSortFilterValue("");
    setSelectedPriceFilterValue("");
    setSelectedCategoryFilterValue("");
  };

  if (!products) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-12 flex items-center justify-between">
        <div className="flex gap-x-6">
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
          <button type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>

        <p className="font-inter">Showing {filteredProducts.length} products</p>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {filteredProducts.length === 0 ? (
          <p className="text-lg">No items found</p>
        ) : (
          <ProductCard products={filteredProducts} />
        )}
      </section>
    </div>
  );
};

export default Products;
