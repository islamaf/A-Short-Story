import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Common/Card/Card";

const Post = () => {
  const { id } = useParams();

  const [user_name, setUserName] = useState("");
  const [user_id, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [date, setDate] = useState("");

  const url = `http://localhost:5000/posts/${id}`;

  useEffect(() => {
    let getStoryData = async () => {
      try {
        let res = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        let resJson = await res.json();

        setUserName(resJson.user_name);
        setUserId(resJson.user_id);
        setTitle(resJson.title);
        setStory(resJson.story);
        setDate(resJson.date.substring(0, 10));
      } catch (err) {
        console.log(err);
      }
    };

    getStoryData();
    // eslint-disable-next-line
  }, []);

  return (
    <Card
      title={title}
      body={story}
      date={date}
      username={user_name}
      user_id={user_id}
    />
  );
};

export default Post;
