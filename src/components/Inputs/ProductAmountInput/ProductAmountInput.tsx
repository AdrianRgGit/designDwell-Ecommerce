import { Minus, Plus } from "lucide-react";
import { FC } from "react";
import { ProductAmountInputProps } from "../../../types/inputTypes";

const ProductAmountInput: FC<ProductAmountInputProps> = ({
  amount,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center gap-x-12">
      <button
        onClick={onDecrement}
        className="flex h-12 w-12 items-center justify-center rounded-full border text-center"
      >
        <Minus />
      </button>
      <span className="font-inter text-xl font-bold">{amount}</span>
      <button
        onClick={onIncrement}
        className="flex h-12 w-12 items-center justify-center rounded-full border text-center"
      >
        <Plus />
      </button>
    </div>
  );
};

export default ProductAmountInput;
