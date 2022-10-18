const redirectIfAuth = (req, res, next) => {
    if (req.session.user_id || req.isAuthenticated()) {
        return res.redirect("/");
    }

    next();
};

const nextIfAuth = (req, res, next) => {
    if (!req.session.user_id) {
        // return res.redirect('/')
        return res.send({ success: false, error: "User unauthenticated." });
    }

    next();
};

export { redirectIfAuth, nextIfAuth };
