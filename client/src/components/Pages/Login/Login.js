import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider";
import Button from "../../UI/Button";
import UserInput from "../../UI/Input";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          email_username: e.target.username.value,
          password: e.target.password.value
        }),
      });

      let resJson = await res.json();

      if (resJson.success) {
        setAuth(true)
      }
      navigate(resJson.redirect);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="mt-28 p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl">Sign in to your account</h1>
        <UserInput
          label={"Username"}
          type={"text"}
          name={"username"}
          placeholder={"Username"}
        />
        <UserInput
          label={"Password"}
          type={"password"}
          name={"password"}
          placeholder={"Password"}
        />
        <Button text={"Sign In"} />
      </form>
    </div>
  );
};

export default Login;
