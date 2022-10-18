import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import UserInput from "../../UI/Input";

const Register = () => {
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          username: e.target.username.value,
          password: e.target.password.value,
          email: e.target.email.value,
        }),
      });

      let resJson = await res.json();

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
        <h1 className="text-center text-3xl">Create your account</h1>
        <UserInput
          label={"Name"}
          type={"text"}
          name={"name"}
          placeholder={"Name"}
        />
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
        <UserInput
          label={"Email"}
          type={"text"}
          name={"email"}
          placeholder={"Email"}
        />
        <Button text={"Register"} />
      </form>
    </div>
  );
};

export default Register;
