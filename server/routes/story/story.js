import express from "express";
import addStory from "../../controllers/story/addStory";
import retrieveStory from "../../controllers/story/retrieveStory";
import { nextIfAuth } from "../../middleware/redirectIfAuth";

const storyRouter = express.Router();

storyRouter.post("/create", nextIfAuth, addStory);
storyRouter.get("/:id", nextIfAuth, retrieveStory);

export default storyRouter;
