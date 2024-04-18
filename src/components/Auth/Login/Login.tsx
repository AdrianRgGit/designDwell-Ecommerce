import { FC } from "react";
import { AuthProps } from "../../../types/authTypes";
import { TextField } from "@mui/material";
import TextFieldInput from "../../Inputs/TextFieldInput/TextFieldInput";
import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";

const Login: FC<AuthProps> = ({ toggleFormView }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <form action="submit" className="w-96 space-y-10">
        <TextFieldInput label="Email" type="email" required grow />
        <TextFieldInput label="Password" type="password" required grow />

        <ButtonInput text="LOG IN" type="submit" />
      </form>
      <a href="#" className="transition-colors duration-200 hover:text-gold">
        Forgot password?
      </a>

      <span className="mt-12">
        <ButtonInput
          text="NEW CUSTOMER?"
          type="button"
          onClick={toggleFormView}
        />
      </span>
    </div>
  );
};

export default Login;
