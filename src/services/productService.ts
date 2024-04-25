import productsData from "../mocks/products";

const fetchProducts = async () => {
  try {
    // NOTE: Simulando una solicitud fetch a un archivo local importado
    return productsData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProducts;
