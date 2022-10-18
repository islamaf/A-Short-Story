import express from "express";
import expressSession from "express-session";
import cors from "cors";
import connectRedis from "connect-redis";
import { createClient } from "redis";
// import dotenv from "dotenv";

// import tpl_auth from "./controllers/login/thirdPartyLogin.js";
// import { redisClient } from "./utils/redisConfig.js";

// Routers
import homeRouter from "./routes/home.js";
import authRouter from "./routes/user/auth.js";
import userRouter from "./routes/user/user.js";
import storyRouter from "./routes/story/story.js";

const app = express();
const port = process.env.PORT || 5000;

// Redis express session storage
let RedisStore = connectRedis(expressSession);
const redisClient = createClient({ legacyMode: true, url: 'redis://redis:6379' });
redisClient.connect().catch(console.error);

// Connect to mongoDB
import "./db/db.js"

// App utilities
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(dirname("public"))));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

var session = expressSession({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
        host: 'redis',
        client: redisClient,
    }),
});
app.use(session);

app.use("/", homeRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", storyRouter)

app.listen(port, () => {
    console.log("listening on port " + port);
    console.log("http://localhost:" + port + "/");
});
