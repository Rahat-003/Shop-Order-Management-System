const OrderModel = require("./../models/OrderModel");
const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");

exports.getOrdersList = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.body;
        let config = {};

        const skip = (page - 1) * limit;

        const [totalOrders, orderList] = await Promise.all([
            OrderModel.countDocuments(config),
            OrderModel.findOne({ config })
                .populate("user")
                .populate("products")
                .skip(skip)
                .limit(limit),
        ]);

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
