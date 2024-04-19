import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { ButtonProfileInputProps } from "../../../types/inputTypes";

const ButtonProfileInput: FC<ButtonProfileInputProps> = ({
  text,
  type,
  label,
  first,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${first ? "border" : "border-x border-b"} flex w-full items-center justify-between p-8 h-24`}
    >
      <div className="space-y-2">
        <p className="text-start">{text}</p>
        {label ? (
          <p className="text-start font-inter text-sm text-gray">{label}</p>
        ) : null}
      </div>

      <ChevronRight />
    </button>
  );
};

export default ButtonProfileInput;
