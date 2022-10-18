import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        trim: true,

    },
    email: {
        type: String,
        trim: true,
        // unique: true,
        lowercase: true,
    },
    name: {
        type: String,
        default: null,
    },
    bio: {
        type: String,
        default: null,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.statics.findByCredentials = async (email_username, password) => {
    const user = await User.findOne({
        $or: [{ email: email_username }, { username: email_username }],
    });

    if (!user) {
        return {
            success: false,
            error: "Username/Email or password are wrong!",
        };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return {
            success: false,
            error: "Username/Email or password are wrong!",
        };
    }

    return user;
};

UserSchema.pre("save", async function (next) {
    const user = this;

    // user.password = await bcrypt.hash(user.password, 8);
    if (user.isModified(user.password)) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

// UserSchema.pre("remove", async function (next) {
//     await Order.deleteMany({ customer_id: this._id });
//     await Ratings.deleteMany({ user: this._id });
//     await Block.deleteMany({ user_id: this._id });
//     await Review.deleteMany({ user_id: this._id });
//     await Report.deleteMany({ user_id: this._id });

//     next();
// });

const User = mongoose.model("User", UserSchema);

export default User;
