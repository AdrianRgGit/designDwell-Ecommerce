import { MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { SelectInputProps } from "../../../types/inputTypes";

const SelectInput: FC<SelectInputProps> = ({ label, values, onClick }) => {
  return (
    <Select
      // NOTE: Esto lo tengo que cambiar a value
      value={20}
      label={label}
      onClick={onClick}
      className="h-12 w-36 text-center"
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#33363F",
          borderRadius: "8px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#FFC94A",
        },
        "& label.Mui-focused": {
          color: "#33363F",
        },
        "& .MuiInput-underline:after": {
          borderColor: "FFC94A",
        },
      }}
    >
      {values.map((value: any) => (
        <MenuItem key={value.id} value={value.value}>
          {value.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
