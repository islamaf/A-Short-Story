import React from "react";

const TextArea = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={props.name} className="text-sm font-light">
        {props.label}
      </label>
      <textarea
        name={props.name}
        className="w-96 px-3 py-2 rounded-md border border-slate-400"
        placeholder={props.placeholder}
      >
        {props.text}
      </textarea>
    </div>
  );
};

export default TextArea;
