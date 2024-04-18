import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormView = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  return (
    <section className="flex h-screen">
      <img src="/images/auth-img.jpg" alt="auth-image" />
      <article className="flex flex-grow items-center justify-center">
        {!showForm ? (
          <Login toggleFormView={toggleFormView} />
        ) : (
          <Register toggleFormView={toggleFormView} />
        )}
      </article>
    </section>
  );
};

export default Auth;
