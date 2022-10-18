import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import UserInput from "../../UI/Input";
import TextArea from "../../UI/TextArea";

const PostForm = () => {
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          title: e.target.title.value,
          story: e.target.story.value,
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
        <h1 className="text-center text-3xl">Create Post</h1>
        <UserInput
          label={"Title"}
          type={"text"}
          name={"title"}
          placeholder={"Today I started a new habit..."}
        />
        <TextArea
          label={"Story"}
          name={"story"}
          placeholder={"Once upon a time..."}
        />
        <Button text={"Publish"} />
      </form>
    </div>
  );
};

export default PostForm;
