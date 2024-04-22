import { Minus, Plus } from "lucide-react";

const ProductAmountInput = () => {
  return (
    <div className="flex items-center gap-x-12">
      <button className="flex h-12 w-12 items-center justify-center rounded-full border text-center">
        <Minus />
      </button>
      <span className="text-xl font-bold">1</span>
      <button className="flex h-12 w-12 items-center justify-center rounded-full border text-center">
        <Plus />
      </button>
    </div>
  );
};

export default ProductAmountInput;
