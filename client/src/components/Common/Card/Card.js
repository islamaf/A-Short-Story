import React from "react";

const Card = (props) => {
  return (
    <div className="mx-60 mt-12 rounded-xl drop-shadow-xl space-y-5 bg-white">
      <div className="p-6">
        <h2 className="text-center text-xl">{props.title}</h2>
        <div className="flex flex-row items-center justify-center">
          <a href={`/users/${props.user_id}`}>
            <span className="mr-12">{props.username}</span>
          </a>
          <span>{props.date}</span>
        </div>
        <p className="text-center">{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
