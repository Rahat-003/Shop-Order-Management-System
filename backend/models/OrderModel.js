const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = Schema.Types;
const { ObjectId } = Types;

const OrderSchema = new Schema(
    {
        user: {
            type: ObjectId,
            ref: "users",
            required: true,
        },
        orderId: {
            type: String,
            required: false,
            unique: true,
        },
        products: [
            {
                type: ObjectId,
                ref: "Product",
                required: true,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
