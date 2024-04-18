import { FC } from "react";
import { ButtonInputProps } from "../../../types/inputTypes";

const ButtonInput: FC<ButtonInputProps> = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full border p-2 transition-colors duration-200 hover:bg-gold"
    >
      {text}
    </button>
  );
};

export default ButtonInput;
