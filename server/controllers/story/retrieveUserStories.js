import mongoose from "mongoose";
import Story from "../../models/story/Story";

const retrieveUserStories = async (req, res) => {
    try {
        const stories = await Story.find({
            user_id: req.params.id,
        }).populate("user_id");

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

        // return jsonStories;
        return res.send({
            stories: jsonStories,
        });
    } catch (e) {
        // return e.message;
        return res.send({
            message: e.message,
        });
    }
};

export default retrieveUserStories;
