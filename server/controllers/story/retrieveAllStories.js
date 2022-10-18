import mongoose from "mongoose";
import Story from "../../models/story/Story";

const retrieveAllStories = async () => {
    try {
        const stories = await Story.find({}).populate("user_id");
        let jsonStories = [];
        stories.forEach((story) => {
            jsonStories.push({
                user_name: story.user_id.username,
                user_id: story.user_id._id,
                title: story.title,
                story: story.story,
                date: story.created_at,
            });
        });

        return jsonStories;
    } catch (e) {
        return e.message;
    }
};

export default retrieveAllStories;
