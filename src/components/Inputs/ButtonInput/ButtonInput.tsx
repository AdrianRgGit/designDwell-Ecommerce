import { FC } from "react";
import { ButtonInputProps } from "../../../types/inputTypes";

const ButtonInput: FC<ButtonInputProps> = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full border p-2 transition duration-200 hover:font-bold"
    >
      {text}
    </button>
  );
};

export default ButtonInput;
