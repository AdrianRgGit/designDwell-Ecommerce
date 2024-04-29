import { FC, useState } from "react";
import { AuthProps } from "../../../types/authTypes";
import TextFieldInput from "../../Inputs/TextFieldInput/TextFieldInput";
import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";
import userLogged from "../../../mocks/userLogged";

const Login: FC<AuthProps> = ({ toggleFormView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === userLogged.email && password === userLogged.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/profile";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <form onSubmit={handleLogin} className="w-96 space-y-10">
        <TextFieldInput
          label="Email"
          type="email"
          required
          grow
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextFieldInput
          label="Password"
          type="password"
          required
          grow
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonInput text="LOG IN" type="submit" grow />
      </form>

      {error ? (
        <p className="text-center text-sm text-red-500">{error}</p>
      ) : null}

      <a href="#" className="transition-colors duration-200 hover:text-gold">
        Forgot password?
      </a>

      <span className="mt-12">
        <ButtonInput
          text="NEW CUSTOMER?"
          type="button"
          grow
          onClick={toggleFormView}
        />
      </span>
    </div>
  );
};

export default Login;
