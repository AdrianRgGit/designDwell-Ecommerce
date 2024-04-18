import { FC } from "react";
import { AuthProps } from "../../../types/authTypes";
import TextFieldInput from "../../Inputs/TextFieldInput/TextFieldInput";
import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";

const Register: FC<AuthProps> = ({ toggleFormView }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <form action="submit" className="w-96 space-y-10">
        <TextFieldInput label="Country" type="text" required grow />
        <TextFieldInput label="Name" type="text" required grow />
        <TextFieldInput label="Email" type="email" required grow />
        <TextFieldInput label="Password" type="password" required grow />

        <ButtonInput text="CREATE ACCOUNT" type="submit" />
      </form>

      <span className="mt-12">
        <ButtonInput
          text="ALREADY A MEMBER?"
          type="button"
          onClick={toggleFormView}
        />
      </span>
    </div>
  );
};

export default Register;
