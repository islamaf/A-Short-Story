import React from "react";

const UserInput = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="username" className="text-sm font-light">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="w-96 px-3 py-2 rounded-md border border-slate-400"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default UserInput;
