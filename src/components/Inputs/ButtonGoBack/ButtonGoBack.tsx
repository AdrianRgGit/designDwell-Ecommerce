import { ChevronLeft } from "lucide-react";

const ButtonGoBack = () => {
  return (
    <button
      type={"button"}
      onClick={() => window.history.back()}
      className="flex gap-x-1 items-center"
    >
      <ChevronLeft />
      <span className="text-sm">Go back</span>
    </button>
  );
};

export default ButtonGoBack;
