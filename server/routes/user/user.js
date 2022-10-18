import express from "express";
import retrieveUserStories from "../../controllers/story/retrieveUserStories";
import { viewCurrentUser } from "../../controllers/user/auth";
import { nextIfAuth } from "../../middleware/redirectIfAuth";

const userRouter = express.Router();

userRouter.get("/:id", retrieveUserStories)
userRouter.get("/me", nextIfAuth, viewCurrentUser);

export default userRouter;
