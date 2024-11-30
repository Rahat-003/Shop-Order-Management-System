const UserModel = require("./../models/UserModel");
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");

const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");

exports.userSignIn = async (req, res) => {
    try {
        let { email, password, type, phone } = req.body;

        if (!email || !password) {
            return errorResponse(res, "Email or password is required");
        }

        email = email.toLowerCase();

        if (!emailValidator.validate(email))
            return errorResponse(res, "Please provide a valid email");

        const emailDomain = email.split("@")[1]?.split(".")[0];

        console.log({ emailDomain }, phone);

        if (phone) phone = phone.trim();

        if (type === "customer" && emailDomain === "xyz" && !phone)
            return errorResponse(
                res,
                "Please provide a phone number for email domain @xyz"
            );

        let user = await UserModel.findOne({
            email: email,
            type,
            deletedAt: null,
        }).select("-createdAt -updatedAt -password");

        if (!user) {
            return errorResponse(res, "user not found. Please sign up first");
        }
        const jwtData = {
            userId: user._id,
            name: user.name,
        };

        console.log(jwtData);

        const token = jwt.sign(jwtData, process.env.JWT_PRIVATE_KEY_USER, {});

        successResponse(res, {
            message: "Login Successfully",
            data: {
                token,
                user: user,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.userSignUp = async (req, res) => {
    try {
        let { name, email, password, type } = req.body;

        if (!name || !email || !password) {
            return errorResponse(res, "validation error");
        }

        email = email.toLowerCase();

        if (!emailValidator.validate(email))
            return errorResponse(res, "Please provide a valid email");

        const emailExists = await UserModel.findOne({
            email: email,
            deletedAt: null,
        });

        if (emailExists) return errorResponse(res, "email is already in use");

        const user = await UserModel.create({
            name,
            email,
            password,
            type,
        });

        delete user._doc.password;

        const jwtData = {
            userId: user._id,
            name: user.name,
        };

        console.log(jwtData);

        const token = jwt.sign(jwtData, process.env.JWT_PRIVATE_KEY_USER, {});

        successResponse(res, {
            message: "Successfully registered",
            data: {
                token,
                user,
            },
        });
    } catch (err) {
        console.log(err);
        return errorResponse(res, err);
    }
};
