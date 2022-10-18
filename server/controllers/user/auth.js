import bcrypt from "bcryptjs";
import User from "../../models/user/User";

import checkDuplicateUser from "./checkDuplicateUser";

const storeUser = async (req, res) => {
    try {
        const duplicateUser = await checkDuplicateUser(req.body.email);
        if (duplicateUser.length > 0) {
            return res.send({
                success: false,
                error: "User by this email already exists.",
                redirect: "/",
            });
        }

        let password = await bcrypt.hash(req.body.password, 8)

        const QUERY = {
            name: req.body.name,
            username: req.body.username,
            password: password,
            email: req.body.email,
        };

        await User.create(QUERY);

        // await createdUser.save()
        // saveLogs(createdUser._id, null, null, "user_register");
        return res.send({ success: true, redirect: "/" });
    } catch (e) {
        return res.send({
            message: e.emssage,
        });
    }
};

const loginUser = async (req, res) => {
    const email_username = req.body.email_username;
    const password = req.body.password;

    const session = req.session;

    if (session.user_id) {
        return res.send({
            success: false,
            error: "Already logged in!",
        });
    }

    try {
        const user = await User.findByCredentials(email_username, password);

        if (user.error) {
            return res.send(user);
        }

        session.user_id = user._id;
        session.user_name = user.username;
        session.user_email = user.email;

        session.save();
        // saveLogs(user._id, null, null, "user_login");
        return res.send({ success: true, redirect: "/" });
    } catch (e) {
        return res.send({
            message: e.emssage,
        });
    }
};

const viewCurrentUser = (req, res) => {
    return res.send(req.session.user_name);
};

const logoutUser = (req, res) => {
    req.session.destroy(() => {
        console.log("Logged out!");
        // res.redirect("/");
        return res.send({
            success: true,
            redirect: '/'
        })
    });
};

export { storeUser, loginUser, viewCurrentUser, logoutUser };
