import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";
import ProductAmountInput from "../../Inputs/ProductAmountInput/ProductAmountInput";

const ProductDetail = () => {
  return (
    <div className="mb-12 mt-20 p-8">
      <section className="mb-6">
        <h2 className="font-coco-gothic-bold text-2xl font-bold">Nombre</h2>
        <h3>Category</h3>
      </section>

      <section className="flex gap-x-24">
        <img
          src="/images/imagesTestProducts/imgTest1.webp"
          alt="product image"
          width={520}
          height={700}
        />

        <article className="flex flex-col justify-center gap-y-12">
          <h4 className="font-coco-gothic-bold text-xl">Description</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi dolor fugiat, facilis accusamus labore quod, est consectetur
            nemo laboriosam dolorum voluptatum consequatur ea eaque temporibus
            cum. Officia, similique labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio fugit, ipsa sed odio suscipit
            nulla! Tempore, nisi aliquam maxime odio reprehenderit a et?
            Deleniti, dolore. Libero veritatis voluptatibus accusantium sequi.
          </p>

          <section className="flex items-center justify-between">
            <ProductAmountInput />

            <div className="w-64">
              <ButtonInput text="Add to cart" type="button" grow />
            </div>
          </section>

          <section>
            <p className="text-end text-4xl font-bold">49.99€</p>
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
