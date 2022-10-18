import mongoose from "mongoose";

mongoose.connect(`mongodb://mongo:27017/stories`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.log.bind(console, `connection error -- ${db}`));
db.once("open", function () {
    console.log("connection succeeded");
});
