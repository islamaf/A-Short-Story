import Story from "../../models/story/Story";

const addStory = async (req, res) => {
    const TITLE = req.body.title;
    const STORY = req.body.story;

    try {
        const QUERY = {
            title: TITLE,
            story: STORY,
            user_id: req.session.user_id,
        };

        const createdStory = await Story.create(QUERY);

        return res.send({
            success: true,
            redirect: `/posts/${createdStory._id}`,
        });
    } catch (e) {
        console.log(e);
        return res.send({
            message: e.message,
        });
    }
};

export default addStory;
