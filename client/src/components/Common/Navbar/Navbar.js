import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider";

export const Navbar = () => {
  const { setAuth, user } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      let res = await fetch("http://localhost:5000/auth/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      let resJson = await res.json();

      setAuth(false);
      navigate(resJson.redirect);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-rose-50">
      <ul className="flex justify-evenly items-center p-4">
        <li>
          <Link to="/" className="text-xl text-black">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-xl text-black">{user}</Link>
        </li>
        <li>
          <Link className="text-xl text-black" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const NoAuthNavbar = () => {
  return (
    <nav className="bg-rose-50">
      <ul className="flex justify-evenly items-center p-4">
        <li>
          <Link to="/" className="text-xl text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-xl text-black">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-xl text-black">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// export default Navbar;
