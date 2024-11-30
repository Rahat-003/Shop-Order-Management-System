const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");

exports.getOrdersList = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully fetched orderList" });
    } catch (err) {
        errorHandler(res, err);
    }
};
exports.updateOrder = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully updated orderList" });
    } catch (err) {
        errorHandler(res, err);
    }
};
exports.deleteOrder = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully deleted orderList" });
    } catch (err) {
        errorHandler(res, err);
    }
};
