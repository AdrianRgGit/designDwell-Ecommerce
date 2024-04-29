import { TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldInputProps } from "../../../types/inputTypes";

const TextFieldInput: FC<TextFieldInputProps> = ({
  label,
  type,
  required,
  grow,
  onChange,
}) => {
  return (
    <TextField
      onChange={onChange}
      className={`${grow ? "w-full" : null}`}
      required={required}
      label={label}
      variant="standard"
      type={type}
      sx={{
        border: "#FFC94A",
        "& label.Mui-focused": {
          color: "#33363F",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#FFC94A",
        },
      }}
    />
  );
};

export default TextFieldInput;
