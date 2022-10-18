import mongoose from "mongoose";
import Story from "../../models/story/Story";

const retrieveStory = async (req, res) => {
    const STORY_ID = mongoose.Types.ObjectId(req.params.id);

    try {
        const story = await Story.findById(STORY_ID).populate('user_id');

        return res.send({
            user_name: story.user_id.username,
            user_id: story.user_id._id,
            title: story.title,
            story: story.story,
            date: story.created_at
        });
    } catch (e) {
        console.log(e);
        return res.send({
            message: e.message,
        });
    }
};

export default retrieveStory;