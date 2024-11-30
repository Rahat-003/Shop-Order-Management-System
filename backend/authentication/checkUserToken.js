const { verify } = require("jsonwebtoken");
const UserModel = require("./../models/UserModel");
const { errorResponse } = require("./../utils/apiResponse");

exports.checkUserToken = (type) => {
    return async (req, res, next) => {
        try {
            let token = req.get("authorization");

            if (!token) {
                return res.status(401).json({
                    status: false,
                    message: "Access denied! Unauthorized User",
                });
            }

            token = token.slice(7);

            const { userId } = verify(token, process.env.JWT_PRIVATE_KEY_USER);

            if (!userId) {
                return res.status(403).json({
                    status: false,
                    message: "Invalid token",
                });
            }

            const user = await UserModel.findOne({
                _id: userId,
                type: {
                    $in: type,
                },
                deletedAt: null,
            });

            if (!user) {
                return res.status(403).json({
                    status: false,
                    message: "Invalid or unauthorized user",
                });
            }

            req.userId = userId;
            req.userType = type;

            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                status: false,
                message: "Invalid or expired token.",
            });
        }
    };
};