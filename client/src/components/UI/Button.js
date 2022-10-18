import React from "react";

const Button = (props) => {
  return (
    <button
      className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-200 ease-in"
      type="submit"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
