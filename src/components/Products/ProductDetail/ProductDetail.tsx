import { useParams } from "react-router-dom";
import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";
import ProductAmountInput from "../../Inputs/ProductAmountInput/ProductAmountInput";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductType } from "../../../types/productType";
import fetchProducts from "../../../services/productService";
import ProductNotFound from "../../Error/ProductNotFound/ProductNotFound";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [amount, setAmount] = useState(1);

  const maxAmount = 100;

  // FIXME: Esto lo tendré que cambiar cuando haga la API. Estoy haciendo la misma llamada que hago en productos. Esto no es correcot
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

  const product = products.find((product) => product.id === id);

  const incrementAmount = () => {
    if (amount < maxAmount) {
      setAmount(amount + 1);
    }
  };

  const decrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-6">
        <h2 className="font-coco-gothic-bold text-2xl font-bold">
          {product.name}
        </h2>
        <h3>{product.category.join(", ")}</h3>
      </section>

      <section className="flex gap-x-24">
        <img
          src={product.image}
          alt="product image"
          width={500}
          height={700}
          className="h-[700px]"
        />

        <article className="flex flex-col justify-center gap-y-12">
          <h4 className="text-xl font-bold">Description</h4>
          <p className="text-justify">{product.description}</p>

          <section className="flex items-center justify-between">
            <ProductAmountInput
              amount={amount}
              onIncrement={incrementAmount}
              onDecrement={decrementAmount}
            />

            <div className="w-64">
              <ButtonInput text="Add to cart" type="button" grow />
            </div>
          </section>

          <div className="-mt-6 text-sm">
            <p>
              If you want to buy more than the maximum quantity, ({maxAmount}{" "}
              un.){" "}
              <a href="#" className="text-gold">
                please contact us.
              </a>
            </p>
          </div>

          <section>
            <p className="text-end text-4xl font-bold">
              {(product.price * amount).toFixed(2)}€
            </p>
          </section>

          <div className="border p-4 text-center">
            <p>
              See our financing services.{" "}
              <a href="#" className="text-gold">
                More information.
              </a>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductDetail;
