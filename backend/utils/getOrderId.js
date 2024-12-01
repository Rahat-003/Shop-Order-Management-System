const OrderModel = require("./../models/OrderModel"); // Adjust with the correct path to your OrderModel
const moment = require("moment-timezone");

exports.generateOrderId = async () => {
    const now = new Date();
    const dateStr = moment(now).tz("Asia/Dhaka").format("DDMMYY");

    const lastOrder = await OrderModel.findOne({
        orderId: { $regex: `^${dateStr}` },
    })
        .sort({ orderId: -1 })
        .limit(1);

    let serialNumber = 1;

    if (lastOrder) {
        const lastSerialNumber = parseInt(lastOrder.orderId.slice(-6), 10);
        serialNumber = lastSerialNumber + 1;
    }

    const serialStr = String(serialNumber).padStart(6, "0");

    const orderId = `${dateStr}${serialStr}`;

    return orderId;
};
