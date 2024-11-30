const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");

exports.userSubmitForm = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully submitted" });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.getOrderListForUser = async (req, res) => {
    try {
        return errorResponse(res, "successfully get");
    } catch (err) {
        errorHandler(res, err);
    }
};
exports.cancelOrderFromUser = async (req, res) => {
    try {
        return errorResponse(res, "successfully cancelled");
    } catch (err) {
        errorHandler(res, err);
    }
};
