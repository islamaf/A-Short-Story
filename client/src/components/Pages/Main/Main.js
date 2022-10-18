import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider";
import Card from "../../Common/Card/Card";
import Button from "../../UI/Button";

const Main = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getHome = async () => {
      try {
        let res = await fetch("http://localhost:5000/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        let resJson = await res.json();

        setStories(resJson.stories);
      } catch (err) {
        console.log(err);
      }
    };

    getHome();
  }, []);

  let idx = 0;
  return (
    <div>
      <Button
        text={"Post a story"}
        onClick={() => {
          if (auth) {
            navigate("/posts/create");
          } else {
            navigate("/login");
          }
        }}
      />
      <div>
        {stories.map((story) => (
          <Card
            key={idx++}
            title={story.title}
            body={story.story}
            date={story.date}
            username={story.user_name}
            user_id={story.user_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
