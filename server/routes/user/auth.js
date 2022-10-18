import express from "express";
import { storeUser, loginUser, logoutUser } from "../../controllers/user/auth";
import { redirectIfAuth } from "../../middleware/redirectIfAuth";

const authRouter = express.Router();

// Direct authentication
authRouter.post("/register", storeUser);
authRouter.post("/login", loginUser);

authRouter.get("/logout", logoutUser);

export default authRouter;
