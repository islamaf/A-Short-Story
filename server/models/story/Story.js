import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StorySchema = new Schema({
    title: {
        type: String
    },
    story: {
        type: String
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
})

const Story = mongoose.model("Story", StorySchema);

export default Story;