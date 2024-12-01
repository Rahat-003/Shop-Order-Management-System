const OrderModel = require("./../models/OrderModel");
const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");
const {
    orderValidationSchema,
} = require("./../validation/order/orderInputValidation");
const { generateOrderId } = require("./../utils/getOrderId");

exports.getOrderListForUser = async (req, res) => {
    try {
        const { customerId } = req.params;

        const orderList = await OrderModel.find({
            _id: customerId,
            status: "pending",
        }).populate("products");

        successResponse(res, {
            message: "order fetched successfully",
            data: {
                orderList,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

// for placing order and updating the order
exports.userSubmitForm = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { products } = req.body;

        const { error } = orderValidationSchema.validate({ products });
        if (error) {
            return errorHandler(res, {
                message: error.details[0].message,
            });
        }

        const alreadyPlacedOrders = await OrderModel.findOne({
            user: customerId,
            status: "pending",
        });

        let orderList;

        if (alreadyPlacedOrders) {
            alreadyPlacedOrders.products.push(...products);
            orderList = await alreadyPlacedOrders.save();
        } else {
            const orderId = await generateOrderId();
            orderList = await OrderModel.create({
                user: customerId,
                _id: customerId,
                orderId,
                products,
                status: "pending",
            });
        }

        successResponse(res, {
            message: "order submitted successfully",
            data: {
                orderList,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.cancelOrderFromUser = async (req, res) => {
    try {
        const { customerId } = req.params;

        let order = await OrderModel.findOne({
            user: customerId,
            status: "pending",
        });

        if (!order) return errorResponse(res, "Customer don't have any order");
        else {
            order.status = "cancelled";
            order = await order.save();

            successResponse(res, {
                message: "order cancelled successfully",
                data: {
                    order,
                },
            });
        }
    } catch (err) {
        errorHandler(res, err);
    }
};
