const { verify } = require("jsonwebtoken");
const UserModel = require("./../models/UserModel");
const { errorResponse } = require("./../utils/apiResponse");

exports.checkUserToken = async (req, res, next) => {
    try {
        let token = req.get("authorization");

        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Access denied! unauthorized User",
            });
        }

        token = token.slice(7);

        const { userId } = verify(token, process.env.JWT_PRIVATE_KEY_USER);

        if (!userId) {
            return res.status(403).json({
                status: false,
                message: "Invalid token 0",
            });
        }

        const user = await UserModel.findOne({
            _id: userId,
            deletedAt: null,
        });

        if (!user) {
            return errorResponse(res, "Invalid user");
        }

        req.userId = userId;

        next();
    } catch (err) {
        errorResponse(res, "Invalid or expired token.", 401);
    }
};
