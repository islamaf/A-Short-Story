import User from "../../models/user/User";

const checkDuplicateUser = async (email) => {
    return await User.find({
        $or: [
            { email: email }
        ],
    });
};

export default checkDuplicateUser;