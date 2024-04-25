import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { SelectInputProps } from "../../../types/inputTypes";

const SelectInput: FC<SelectInputProps> = ({
  label,
  values,
  selectedFilterValue,
  onChange,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="select-input">{label}</InputLabel>
      <Select
        labelId="select-input"
        id="demo-simple-select-autowidth"
        value={selectedFilterValue}
        onChange={onChange}
        label={label}
        className="min-w-48"
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
        {values.map((value) => (
          <MenuItem key={value.id} value={value.value}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
