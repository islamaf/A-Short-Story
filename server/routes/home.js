import express from "express";
import retrieveAllStories from "../controllers/story/retrieveAllStories";

const homeRouter = express.Router();
homeRouter.get("/", async (req, res) => {
    // console.log(req.session)
    if (req.session.user_name) {
        // const user_id = req.session.user_id;
        return res.send({
            logged_in: true,
            username: req.session.user_name,
            stories: await retrieveAllStories()
        });
    } else {
        return res.send({
            logged_in: false,
            stories: await retrieveAllStories()
        });
    }
});

export default homeRouter;
