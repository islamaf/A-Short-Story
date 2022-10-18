import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Common/Card/Card";

const Profile = () => {
  let { id } = useParams();

  const [stories, setStories] = useState([]);
  const url = `http://localhost:5000/users/${id}`;

  useEffect(() => {
    let getUserStories = async () => {
      try {
        let res = await fetch(url, {
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

    getUserStories();
    // eslint-disable-next-line
  }, []);

  let idx = 0;

  return (
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
  );
};

export default Profile;
